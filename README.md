# Windows Explorer
A Windows Explorer-like web application built with Vue 3, TypeScript, Express, and PostgreSQL.

## Features
- Display complete folder structure in the left panel
- Display direct subfolders in the right panel
- Support unlimited folder nesting levels
- Recursive folder tree rendering
- Expand / Collapse folders
- Folder selection highlighting

## Tech Stack

### Frontend
- Vue 3
- TypeScript
- Vite
- Composition API

### Backend
- Node.js
- Express
- TypeScript

### Database
- PostgreSQL

---

## Project Structure

```text
take-home-explorer
├── backend
│   ├── src
│   │   ├── database
│   │   ├── repositories
│   │   ├── services
│   │   └── app.ts
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── types
│   │   └── App.vue
│
└── README.md
```

---

## Database Setup

Create PostgreSQL database:

```sql
CREATE DATABASE explorer_db;
```

Create table:

```sql
CREATE TABLE folders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    parent_id INTEGER NULL
);
```

Insert sample data:

```sql
INSERT INTO folders (id, name, parent_id)
VALUES
(1, 'Root', NULL),
(2, 'Documents', 1),
(3, 'Pictures', 1),
(4, 'Downloads', 1),
(5, 'Work', 2),
(6, 'Personal', 2),
(7, 'Travel', 3),
(8, 'Family', 3);
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Backend will run on:

```text
http://localhost:3000
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## API

### Get Folder Tree

```http
GET /folders/tree
```

Example Response:

```json
[
  {
    "id": 1,
    "name": "Root",
    "children": []
  }
]
```

---

## Design Decisions

### Recursive Component

The folder tree is implemented using a recursive Vue component to support unlimited folder nesting levels.

### Tree Building Algorithm

The backend converts flat database records into a hierarchical tree structure using an O(n) algorithm.

### Architecture

Backend follows a layered architecture:

```text
Controller
  ↓
Service
  ↓
Repository
  ↓
Database
```

---