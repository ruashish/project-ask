const path = require("path");
const fs = require("fs").promises;

const iconFolderRelativePath = "assets/icons";
const iconFolderAbsolutePath = path.join(
  __dirname,
  "../",
  iconFolderRelativePath,
);

const iconTsFileName = "icons.ts";
const iconTsPath = path.join(iconFolderAbsolutePath, iconTsFileName);

const generateIcons = async () => {
  // Read the existing icons.ts file and extract the data
  let iconJsonObject = {};
  try {
    const iconTsContent = await fs.readFile(iconTsPath, "utf-8");
    const iconTsData = iconTsContent
      .replace("export const ICON_TYPES = ", "")
      .slice(0, -1);
    iconJsonObject = JSON.parse(iconTsData);
  } catch (error) {
    // If file does not exist or cannot be parsed, start with an empty object
  }

  // find all svg files in the icon folder
  const files = await fs.readdir(iconFolderAbsolutePath);
  const svgFiles = files.filter((file) => file.endsWith(".svg"));

  // get file names for svg files
  const iconNames = svgFiles.map((file) => file.replace(".svg", ""));

  for (const iconName of iconNames) {
    const key = iconName.replace(/[^a-zA-Z0-9]/g, "_").toUpperCase();
    const iconContent = await fs.readFile(
      path.join(iconFolderAbsolutePath, `${iconName}.svg`),
      "utf-8",
    );
    // throw error if key already exists
    if (iconJsonObject[key]) {
      throw new Error(`Icon with key ${key} already exists`);
    } else {
      iconJsonObject[key] = iconContent;
    }
  }

  // Generate the TypeScript content
  const iconTsContent = `export const ICON_TYPES = ${JSON.stringify(
    iconJsonObject,
    null,
    2,
  )
    .replace(/\\n/g, ``)
    .replace(/\\"/g, `'`)};`;

  // Write the content to the .ts file
  await fs.writeFile(iconTsPath, iconTsContent);

  for (const iconName of iconNames) {
    await fs.unlink(path.join(iconFolderAbsolutePath, `${iconName}.svg`));
  }
};

generateIcons();
