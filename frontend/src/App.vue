<template>
  
  <div class="container">
    
    <div class="left-panel">
      <h3>Folder Tree</h3>
      
      <div v-if="error">
        {{ error }}
      </div>

      <FolderTree
        v-for="folder in folders"
        :key="folder.id"
        :folder="folder"
        :selected-id="selectedFolder?.id"
        @select="selectFolder"
      />
    </div>

    <div class="right-panel">
      <h3>
      Subfolders
        <span v-if="selectedFolder">
          of {{ selectedFolder.name }}
        </span>
      </h3>

      <div v-if="selectedFolder">

        <div
          v-if="selectedFolder.children.length === 0"
        >
          No subfolders
        </div>

        <div
          v-for="child in selectedFolder.children"
          :key="child.id"
          class="subfolder"
        >
          📁 {{ child.name }}
        </div>

      </div>

      <div v-else>
        Select a folder
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from "vue";
import FolderTree from "./components/FolderTree.vue";
import type { Folder } from "./types/folder";
import { getFolderTree } from "./services/folder.service";

const folders = ref<Folder[]>([]);
const selectedFolder = ref<Folder | null>(null);
const error = ref("");

function selectFolder(folder: Folder) {
  selectedFolder.value = folder;
}

onMounted(async () => {
  try {
    folders.value = await getFolderTree();
  }
  catch (e) {
    error.value = "Failed to load folders";
  }
 

});
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  height: 100vh;
}

.left-panel {
  width: 40%;
  border-right: 1px solid #ccc;
  padding: 16px;
  text-align: left;
}

.right-panel {
  flex: 1;
  padding: 16px;
  text-align: left;
}

h3 {
  margin-top: 0;
}
</style>