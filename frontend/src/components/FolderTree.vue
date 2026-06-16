<template>
  <div class="tree-node">

    <div
      class="folder"
      :class="{ selected: selectedId === folder.id }"
      @click="handleClick"
    >
      <span class="arrow">
        {{
          folder.children.length > 0
            ? (expanded ? "▼" : "▶")
            : ""
        }}
      </span>

      📁 {{ folder.name }}
    </div>

    <div
      v-if="expanded && folder.children.length > 0"
      class="children"
    >
      <FolderTree
        v-for="child in folder.children"
        :key="child.id"
        :folder="child"
        :selected-id="selectedId"
        @select="$emit('select', $event)"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Folder } from "../types/folder";

defineOptions({
  name: "FolderTree"
});

const props = defineProps<{
  folder: Folder;
  selectedId?: number;
}>();

const emit = defineEmits<{
  (e: "select", folder: Folder): void;
}>();

const expanded = ref(
  props.folder.parent_id === null
);

function handleClick() {
  emit("select", props.folder);

  if (props.folder.children.length > 0) {
    expanded.value = !expanded.value;
  }
}
</script>

<style scoped>
.tree-node {
  margin: 2px 0;
}

.folder {
  cursor: pointer;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.folder:hover {
  background-color: #1f2937;
}

.selected {
  background-color: #2563eb;
  color: white;
}

.children {
  padding-left: 24px;
}

.arrow {
  width: 18px;
  display: inline-block;
  text-align: center;
}
</style>