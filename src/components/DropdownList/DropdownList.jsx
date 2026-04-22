import { useState, useRef } from "react";
import styles from "./DropdownList.module.css";

export function DropdownList({ options, selectedIds, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const wrapperRef = useRef(null);
    const searchInputRef = useRef(null);

    const filteredOptions = options.filter((option) =>
        option.lastName.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const toggleSelection = (id) => {
        const newSelection = selectedIds.includes(id)
            ? selectedIds.filter((itemId) => itemId !== id)
            : [...selectedIds, id];
        onChange(newSelection);
    };

    return (
        <div className={styles.dropdownWrapper} ref={wrapperRef}>
            {/* Выпадающее меню */}
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    {/* Поиск */}
                    <div className={styles.dropdownSearch}>
                        <input
                            id="search-by-lastname"
                            name="search-by-lastname"
                            ref={searchInputRef}
                            type="text"
                            placeholder="Поиск по фамилии..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                    {/* Список опций */}
                    <div className={styles.dropdownList}>
                        {filteredOptions.length === 0 ? (
                            <div className={styles.dropdownEmpty}>Ничего не найдено</div>
                        ) : (
                            filteredOptions.map((option) => (
                                <div
                                    key={option.id}
                                    className={`${styles["dropdownItem"]} ${selectedIds.includes(option.id) ? styles.selected : ""}`}
                                    onClick={() => toggleSelection(option.id)}
                                >
                                    <div className={styles.checkbox}></div>
                                    {option.lastName}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
