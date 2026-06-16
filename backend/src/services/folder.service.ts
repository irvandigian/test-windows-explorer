import { getAllFolders } from "../repositories/folder.repository";

export async function getFolderTree() {
  const folders = await getAllFolders();

  const map = new Map();

  folders.forEach(folder => {
    map.set(folder.id, {
      ...folder,
      children: []
    });
  });

  const roots: any[] = [];

  folders.forEach(folder => {
    const node = map.get(folder.id);

    if (folder.parent_id === null) {
      roots.push(node);
    } else {
      const parent = map.get(folder.parent_id);

      if (parent) {
        parent.children.push(node);
      }
    }
  });

  return roots;
}