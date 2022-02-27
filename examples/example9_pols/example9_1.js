function insertItem(newItem) {
    if (repo.Exists(newItem)) {
        repo.Update(newItem);
    } else {
        repo.Add(newItem);
    }
}

// ¿Solución?
// InsertOrUpdate
// Upsert
// ¿?