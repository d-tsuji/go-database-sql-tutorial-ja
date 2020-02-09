rows, err := db.Query(`
SELECT
	name,
	COALESCE(other_field, '') as otherField
WHERE id = ?
`, 42)

for rows.Next() {
err := rows.Scan(&name, &otherField)
// ..
// If `other_field` was NULL, `otherField` is now an empty string. This works with other data types as well.
}
