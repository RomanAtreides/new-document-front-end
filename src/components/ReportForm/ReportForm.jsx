import {useState} from "react";
import {DropdownList} from "../DropdownList/DropdownList";
import styles from "./ReportForm.module.css";

import {receivedInternalManagers} from "../../store/internal-managers-store";

export const ReportForm = function ReportForm({onCreateReport}) {
    const [formData, setFormData] = useState({
        investigationDate: "",
        investigationTime: "",
        productCodeName: "",
        productNumber: "",
        productProductionDate: "",
        incomingLetterNumber: "",
        incomingLetterDate: "",
        incomingLetterSender: "",
        faultDescription: "",
        rollingStockManufacturer: "",
        rollingStockType: "",
        rollingStockSeries: "",
        rollingStockNumber: "",
        rollingStockCommissioningDate: "",
        rollingStockMileage: "",
        faultDetectionPlace: "",
        internalManagersUuids: [],
        commissionUuids: [],
        directorId: "", // a1f4343f-2ba7-4689-9b38-27f7cb0216a3
        managerId: "", // 886b27ca-3529-4ce6-82ae-555eff2ba916
        performerId: "", // dcd24a3e-8040-4906-9c12-4722c5d94f15
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prev) => ({...prev, [name]: value}));
        setSubmitted(false);
    };

    const handleSurnamesChange = (newInternalManagersUuids) => {
        setFormData((prev) => ({...prev, internalManagersUuids: newInternalManagersUuids}));
        setSubmitted(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        const report = {
            investigationDate: formData.investigationDate,
            investigationTime: formData.investigationTime,
            productCodeName: formData.productCodeName,
            productNumber: formData.productNumber,
            productProductionDate: formData.productProductionDate,
            incomingLetterNumber: formData.incomingLetterNumber,
            incomingLetterDate: formData.incomingLetterDate,
            incomingLetterSender: formData.incomingLetterSender,
            faultDescription: formData.faultDescription,
            rollingStockManufacturer: formData.rollingStockManufacturer,
            rollingStockType: formData.rollingStockType,
            rollingStockSeries: formData.rollingStockSeries,
            rollingStockNumber: formData.rollingStockNumber,
            rollingStockCommissioningDate: formData.rollingStockCommissioningDate,
            rollingStockMileage: formData.rollingStockMileage,
            faultDetectionPlace: formData.faultDetectionPlace,
            internalManagersUuids: formData.internalManagersUuids,
            commissionUuids: formData.commissionUuids,
            directorId: formData.directorId,
            managerId: formData.managerId,
            performerId: formData.performerId,
        };
        onCreateReport(report);
        setSubmitted(true);
        setLoading(false);
    };

    const selectedCount = formData.internalManagersUuids.length;

    return (
        <div>
            <form className={styles.reportForm}>
                <div className={styles.formGroup}>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="product-code-name">
                            Условный номер изделия
                        </label>
                        {/* TODO: Определиться с тем, у каких полей формы должно быть свойство "required" */}
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="product-code-name"
                            name="product-code-name"
                            placeholder="013А.010-02"
                            autoComplete="on"
                            value={formData.productCodeName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="product-number">
                            Заводской номер изделия
                        </label>
                        <input
                            className={styles.formInputText}
                            type="number"
                            id="product-number"
                            name="product-number"
                            placeholder="003"
                            value={formData.productNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="product-production-date">
                            Дата изготовления изделия
                        </label>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="product-production-date"
                            name="product-production-date"
                            placeholder="04.2025"
                            autoComplete="on"
                            value={formData.productProductionDate}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="incoming-letter-number">
                            Номер входящего письма
                        </label>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="incoming-letter-number"
                            name="incoming-letter-number"
                            placeholder="16777-МВМ"
                            autoComplete="on"
                            value={formData.incomingLetterNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="incoming-letter-date">
                            Дата входящего письма
                        </label>
                        <input
                            className={styles.formInputText}
                            type="date"
                            id="incoming-letter-date"
                            name="incoming-letter-date"
                            value={formData.incomingLetterDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="incoming-letter-sender">
                            Отправитель письма
                        </label>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="incoming-letter-sender"
                            name="incoming-letter-sender"
                            placeholder="АО «Метровагонмаш»"
                            autoComplete="on"
                            value={formData.incomingLetterSender}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="fault-detection-place">
                            Место обнаружения неисправности
                        </label>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="fault-detection-place"
                            name="fault-detection-place"
                            placeholder="электродепо «Ельцовское»"
                            autoComplete="on"
                            value={formData.faultDetectionPlace}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formColumn}>
                        <label className={styles.formColumnInputTextLabel} htmlFor="fault-description">
                            Описание неисправности
                        </label>
                        <textarea
                            className={styles.formInputText}
                            id="fault-description"
                            name="fault-description"
                            placeholder="Не срабатывает экстренное торможение"
                            autoComplete="off"
                            value={formData.faultDescription}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="rolling-stock-manufacturer">
                            Производитель подвижного состава
                        </label>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="rolling-stock-manufacturer"
                            name="rolling-stock-manufacturer"
                            placeholder="АО «Метровагонмаш»"
                            autoComplete="on"
                            value={formData.rollingStockManufacturer}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="rolling-stock-type">
                            Тип подвижного состава
                        </label>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="rolling-stock-type"
                            name="rolling-stock-type"
                            placeholder="Вагон метро"
                            autoComplete="on"
                            value={formData.rollingStockType}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="rolling-stock-series">
                            Серия подвижного состава
                        </label>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="rolling-stock-series"
                            name="rolling-stock-series"
                            placeholder="81-725.3"
                            autoComplete="on"
                            value={formData.rollingStockSeries}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="rolling-stock-number">
                            Номер подвижного состава
                        </label>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="rolling-stock-number"
                            name="rolling-stock-number"
                            placeholder="25305"
                            autoComplete="on"
                            value={formData.rollingStockNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="rolling-stock-commissioning-date">
                            Дата ввода в эксплуатацию подвижного состава
                        </label>
                        <input
                            className={styles.formInputText}
                            type="date"
                            id="rolling-stock-commissioning-date"
                            name="rolling-stock-commissioning-date"
                            value={formData.rollingStockCommissioningDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="rolling-stock-mileage">
                            Пробег подвижного состава
                        </label>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="rolling-stock-mileage"
                            name="rolling-stock-mileage"
                            placeholder="3.31"
                            autoComplete="on"
                            value={formData.rollingStockMileage}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="investigation-date">
                            Дата исследования
                        </label>
                        <input
                            className={styles.formInputText}
                            type="date"
                            id="investigation-date"
                            name="investigation-date"
                            value={formData.investigationDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="investigation-time">
                            Время начала исследования
                        </label>
                        <input
                            className={styles.formInputText}
                            type="time"
                            id="investigation-time"
                            name="investigation-time"
                            value={formData.investigationTime}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formColumn}>
                        <p className={styles.formColumnInputTextParagraph}>
                            Адресаты
                        </p>
                        <DropdownList
                            options={receivedInternalManagers}
                            internalManagersUuids={formData.internalManagersUuids}
                            onChange={handleSurnamesChange}
                            placeholder="Кликните, чтобы открыть список..."
                        />
                    </div>
                    <div className={styles.formColumn}>
                        <p className={styles.formColumnInputTextParagraph}>
                            Члены комиссии
                        </p>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="commission-uuids"
                            name="commission-uuids"
                            placeholder="uuid"
                            autoComplete="on"
                            value={formData.commissionUuids}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="director-id">
                            Заместитель ген. директора
                        </label>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="director-id"
                            name="director-id"
                            placeholder="uuid"
                            autoComplete="on"
                            value={formData.directorId}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="manager-id">
                            Руководитель
                        </label>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="manager-id"
                            name="manager-id"
                            placeholder="uuid"
                            autoComplete="on"
                            value={formData.managerId}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formRow}>
                        <label className={styles.formInputTextLabel} htmlFor="performer-id">
                            Исполнитель
                        </label>
                        <input
                            className={styles.formInputText}
                            type="text"
                            id="performer-id"
                            name="performer-id"
                            placeholder="uuid"
                            autoComplete="on"
                            value={formData.performerId}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <button
                    className={styles.button}
                    type="submit"
                    onClick={onSubmit}
                    disabled={loading || selectedCount === 0}
                >
                    {loading ? "Отправка..." : "Отправить заявку"}
                </button>
            </form>
            {submitted && (
                <div className={styles.resultPanel}>
                    <h3>Данные отправлены</h3>
                </div>
            )}
        </div>
    );
};
