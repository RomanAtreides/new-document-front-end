import {useState} from "react";
import {DropdownList} from "../DropdownList/DropdownList";
import {DropdownListSingleSelect} from "../DropdownListSingleSelect/DropdownListSingleSelect";
import styles from "./ReportForm.module.css";

import {receivedInternalManagers} from "../../store/internal-managers-store";

export const ReportForm = function ReportForm({onCreateReport}) {
    const reportInitialState = {
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
    };

    const [formData, setFormData] = useState(reportInitialState);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prev) => ({...prev, [name]: value}));
        setSubmitted(false);
    };

    const handleInternalManagersChange = (newInternalManagersUuids) => {
        setFormData((prev) => ({...prev, internalManagersUuids: newInternalManagersUuids}));
        setSubmitted(false);
    };

    const handleCommissionChange = (newCommissionUuids) => {
        setFormData((prev) => ({...prev, commissionUuids: newCommissionUuids}));
        setSubmitted(false);
    };

    const handleDirectorChange = (newDirectorUuid) => {
        setFormData((prev) => ({...prev, directorId: newDirectorUuid}));
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
        setFormData(reportInitialState);
        setSubmitted(true);
        setLoading(false);
    };

    const selectedCount = formData.internalManagersUuids.length; // TODO: Кнопка формы активна только если количество менеджеров не равно 0!

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
                            name="productCodeName"
                            value={formData.productCodeName}
                            onChange={handleInputChange}
                            placeholder="013А.010-02"
                            autoComplete="on"
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
                            name="productNumber"
                            value={formData.productNumber}
                            onChange={handleInputChange}
                            placeholder="003"
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
                            name="productProductionDate"
                            value={formData.productProductionDate}
                            onChange={handleInputChange}
                            placeholder="04.2025"
                            autoComplete="on"
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
                            name="incomingLetterNumber"
                            value={formData.incomingLetterNumber}
                            onChange={handleInputChange}
                            placeholder="16777-МВМ"
                            autoComplete="on"
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
                            name="incomingLetterDate"
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
                            name="incomingLetterSender"
                            value={formData.incomingLetterSender}
                            onChange={handleInputChange}
                            placeholder="АО «Метровагонмаш»"
                            autoComplete="on"
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
                            name="faultDetectionPlace"
                            value={formData.faultDetectionPlace}
                            onChange={handleInputChange}
                            placeholder="электродепо «Ельцовское»"
                            autoComplete="on"
                        />
                    </div>
                    <div className={styles.formColumn}>
                        <label className={styles.formColumnInputTextLabel} htmlFor="fault-description">
                            Описание неисправности
                        </label>
                        <textarea
                            className={styles.formInputText}
                            id="fault-description"
                            name="faultDescription"
                            value={formData.faultDescription}
                            onChange={handleInputChange}
                            placeholder="Не срабатывает экстренное торможение"
                            autoComplete="off"
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
                            name="rollingStockManufacturer"
                            value={formData.rollingStockManufacturer}
                            onChange={handleInputChange}
                            placeholder="АО «Метровагонмаш»"
                            autoComplete="on"
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
                            name="rollingStockType"
                            value={formData.rollingStockType}
                            onChange={handleInputChange}
                            placeholder="Вагон метро"
                            autoComplete="on"
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
                            name="rollingStockSeries"
                            value={formData.rollingStockSeries}
                            onChange={handleInputChange}
                            placeholder="81-725.3"
                            autoComplete="on"
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
                            name="rollingStockNumber"
                            value={formData.rollingStockNumber}
                            onChange={handleInputChange}
                            placeholder="25305"
                            autoComplete="on"
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
                            name="rollingStockCommissioningDate"
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
                            name="rollingStockMileage"
                            value={formData.rollingStockMileage}
                            onChange={handleInputChange}
                            placeholder="3.31"
                            autoComplete="on"
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
                            name="investigationDate"
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
                            name="investigationTime"
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
                            employeesUuids={formData.internalManagersUuids}
                            onChange={handleInternalManagersChange}
                            placeholder="Кликните, чтобы открыть список..."
                        />
                    </div>
                    <div className={styles.formColumn}>
                        <p className={styles.formColumnInputTextParagraph}>
                            Члены комиссии
                        </p>
                        <DropdownList
                            options={receivedInternalManagers}
                            employeesUuids={formData.commissionUuids}
                            onChange={handleCommissionChange}
                            placeholder="Кликните, чтобы открыть список..."
                        />
                    </div>
                    <div className={styles.formColumn}>
                        <p className={styles.formColumnInputTextParagraph}>
                            Заместитель ген. директора
                        </p>
                        <DropdownListSingleSelect
                            options={receivedInternalManagers}
                            internalManagersUuids={formData.directorId}
                            onChange={handleDirectorChange}
                            placeholder="Кликните, чтобы открыть список..."
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
                            name="managerId"
                            value={formData.managerId}
                            onChange={handleInputChange}
                            placeholder="uuid"
                            autoComplete="on"
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
                            name="performerId"
                            value={formData.performerId}
                            onChange={handleInputChange}
                            placeholder="uuid"
                            autoComplete="on"
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
