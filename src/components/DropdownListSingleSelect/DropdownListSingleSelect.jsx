import {useEffect, useRef, useState} from "react";
import styles from "./DropdownListSingleSelect.module.css";

export function DropdownListSingleSelect({options, managerId, onChange, placeholder}) {
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
        onChange(id);
        console.log(id)
    };

    const removeTag = (e) => {
        e.stopPropagation();
        onChange(managerId = "");
    };

    let optionIndex = options.findIndex((option) => option.id === managerId);

    return (
        <div className={styles.dropdownWrapper} ref={wrapperRef}>
            {/* Триггер / кнопка открытия */}

                <div
                    className={`${styles["dropdownTrigger"]} ${isOpen ? styles.open : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                <span className={managerId.length === 0 ? styles.placeholder : ""}>
                    {managerId.length === 0 ? placeholder : `${options[optionIndex].lastName} ${options[optionIndex].firstName.charAt(0)}.${options[optionIndex].fatherName.charAt(0)}.`}
                </span>
                    <div className={styles.buttonsBlock}>
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
                        {managerId.length !== 0 &&
                            <button className={styles.deleteButton}
                                    onClick={(e) => removeTag(e)}
                                    title="Удалить"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                        }
                    </div>
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
                                    className={`${styles["dropdownItem"]} ${managerId.includes(option.id) ? styles.selected : ""}`}
                                    onClick={() => toggleSelection(option.id)}
                                >
                                    {option.lastName} - {option.position}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
