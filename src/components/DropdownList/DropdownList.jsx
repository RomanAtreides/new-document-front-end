import {useEffect, useRef, useState} from "react";
import styles from "./DropdownList.module.css";

export function DropdownList({options, internalManagersUuids, onChange, placeholder}) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const wrapperRef = useRef(null);
    const searchInputRef = useRef(null);

    // Закрытие при клике вне компонента
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Фокус на поиск при открытии
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            setTimeout(() => searchInputRef.current.focus(), 100);
        }
    }, [isOpen]);

    const filteredOptions = options.filter((option) =>
        option.lastName.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const toggleSelection = (id) => {
        const newSelection = internalManagersUuids.includes(id)
            ? internalManagersUuids.filter((itemId) => itemId !== id)
            : [...internalManagersUuids, id];
        onChange(newSelection);
    };

    const removeTag = (e, id) => {
        e.stopPropagation();
        onChange(internalManagersUuids.filter((itemId) => itemId !== id));
    };

    const selectedSurnames = options.filter((option) => internalManagersUuids.includes(option.id));

    return (
        <div className={styles.dropdownWrapper} ref={wrapperRef}>
            {/* Триггер / кнопка открытия */}
            <div
                className={`${styles["dropdownTrigger"]} ${isOpen ? styles.open : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={internalManagersUuids.length === 0 ? styles.placeholder : ""}>
                    {internalManagersUuids.length === 0 ? placeholder : `Выбрано: ${internalManagersUuids.length}`}
                </span>
                <svg
                    className={styles.arrow}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>

            {/* Выпадающее меню */}
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    {/* Поиск */}
                    <div className={styles.dropdownSearch}>
                        <input
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
                                    className={`${styles["dropdownItem"]} ${internalManagersUuids.includes(option.id) ? styles.selected : ""}`}
                                    onClick={() => toggleSelection(option.id)}
                                >
                                    <div className={styles.checkbox}></div>
                                    {option.lastName} - {option.position}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            {/* Выбранные теги */}
            <div className={styles.selectedTags}>
                {selectedSurnames.length === 0 ? (
                    <span className={styles.noSelection}>Нажмите на поле выше, чтобы выбрать сотрудников</span>
                ) : (
                    selectedSurnames.map((option) => (
                        <span key={option.id} className={styles.tag}>
                            {option.lastName} – {option.position}
                            <button className={styles.tagRemove} onClick={(e) => removeTag(e, option.id)}
                                    title="Удалить">
                                ×
                            </button>
                        </span>
                    ))
                )}
            </div>
        </div>
    );
}
