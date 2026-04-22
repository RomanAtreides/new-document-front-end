import { useState } from "react";
import { DropdownList } from "../DropdownList/DropdownList";
import styles from "./ReportForm.module.css";

import { receivedInternalManagers, receivedCommission } from "../../store/internal-managers-store";

// const receivedInternalManagersUuids = receivedInternalManagers.map((manager) => manager.id);
const receivedCommissionUuids = receivedCommission.map((member) => member.id);

export const ReportForm = function ReportForm({ onCreateReport }) {
    const [investigationDate, setInvestigationDate] = useState("");
    const [investigationTime, setInvestigationTime] = useState("");
    const [productCodeName, setProductCodeName] = useState("");
    const [productNumber, setProductNumber] = useState("");
    const [productProductionDate, setProductProductionDate] = useState("");
    const [incomingLetterNumber, setIncomingLetterNumber] = useState("");
    const [incomingLetterDate, setIncomingLetterDate] = useState("");
    const [incomingLetterSender, setIncomingLetterSender] = useState("");
    const [faultDescription, setFaultDescription] = useState("");
    const [rollingStockManufacturer, setRollingStockManufacturer] = useState("");
    const [rollingStockType, setRollingStockType] = useState("");
    const [rollingStockSeries, setRollingStockSeries] = useState("");
    const [rollingStockNumber, setRollingStockNumber] = useState("");
    const [rollingStockCommissioningDate, setRollingStockCommissioningDate] = useState("");
    const [rollingStockMileage, setRollingStockMileage] = useState("");
    const [faultDetectionPlace, setFaultDetectionPlace] = useState("");
    const [internalManagersUuids, setInternalManagersUuids] = useState([]); // TODO: Здесь должен быть массив UUID.
    const [commissionUuids, setCommissionUuids] = useState(receivedCommissionUuids); // TODO: Здесь должен быть массив UUID.
    const [directorId, setDirectorId] = useState("a1f4343f-2ba7-4689-9b38-27f7cb0216a3"); // TODO: Здесь должен быть UUID.
    const [managerId, setManagerId] = useState("886b27ca-3529-4ce6-82ae-555eff2ba916"); // TODO: Здесь должен быть UUID.
    const [performerId, setPerformerId] = useState("dcd24a3e-8040-4906-9c12-4722c5d94f15"); // TODO: Здесь должен быть UUID.

    const onSubmit = (event) => {
        event.preventDefault();

        const report = {
            investigationDate,
            investigationTime,
            productCodeName,
            productNumber,
            productProductionDate,
            incomingLetterNumber,
            incomingLetterDate,
            incomingLetterSender,
            faultDescription,
            rollingStockManufacturer,
            rollingStockType,
            rollingStockSeries,
            rollingStockNumber,
            rollingStockCommissioningDate,
            rollingStockMileage,
            faultDetectionPlace,
            internalManagersUuids,
            commissionUuids,
            directorId,
            managerId,
            performerId,
        };
        onCreateReport(report);
        setInvestigationDate("");
        setInvestigationTime("");
        setProductCodeName("");
        setProductNumber("");
        setProductProductionDate("");
        setIncomingLetterNumber("");
        setIncomingLetterDate("");
        setIncomingLetterSender("");
        setFaultDescription("");
        setRollingStockManufacturer("");
        setRollingStockType("");
        setRollingStockSeries("");
        setRollingStockNumber("");
        setRollingStockCommissioningDate("");
        setRollingStockMileage("");
        setFaultDetectionPlace("");
        setInternalManagersUuids([]);
        setCommissionUuids([]);
        setDirectorId("");
        setManagerId("");
        setPerformerId("");
    };

    return (
        <form className={styles.reportForm}>
            <div className={styles.formGroup}>
                <div className={styles.formRow}>
                    <label className={styles.formInputTextLabel} htmlFor="product-code-name">
                        Условный номер изделия
                    </label>
                    <input
                        className={styles.formInputText}
                        type="text"
                        id="product-code-name"
                        name="product-code-name"
                        placeholder="013А.010-02"
                        autoComplete="on"
                        value={productCodeName}
                        onChange={(event) => {
                            setProductCodeName(event.target.value);
                        }}
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
                        value={productNumber}
                        onChange={(event) => {
                            setProductNumber(event.target.value);
                        }}
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
                        value={productProductionDate}
                        onChange={(event) => {
                            setProductProductionDate(event.target.value);
                        }}
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
                        value={incomingLetterNumber}
                        onChange={(event) => {
                            setIncomingLetterNumber(event.target.value);
                        }}
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
                        value={incomingLetterDate}
                        onChange={(event) => {
                            setIncomingLetterDate(event.target.value);
                        }}
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
                        value={incomingLetterSender}
                        onChange={(event) => {
                            setIncomingLetterSender(event.target.value);
                        }}
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
                        value={faultDetectionPlace}
                        onChange={(event) => {
                            setFaultDetectionPlace(event.target.value);
                        }}
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
                        value={faultDescription}
                        onChange={(event) => {
                            setFaultDescription(event.target.value);
                        }}
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
                        value={rollingStockManufacturer}
                        onChange={(event) => {
                            setRollingStockManufacturer(event.target.value);
                        }}
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
                        value={rollingStockType}
                        onChange={(event) => {
                            setRollingStockType(event.target.value);
                        }}
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
                        value={rollingStockSeries}
                        onChange={(event) => {
                            setRollingStockSeries(event.target.value);
                        }}
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
                        value={rollingStockNumber}
                        onChange={(event) => {
                            setRollingStockNumber(event.target.value);
                        }}
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
                        value={rollingStockCommissioningDate}
                        onChange={(event) => {
                            setRollingStockCommissioningDate(event.target.value);
                        }}
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
                        value={rollingStockMileage}
                        onChange={(event) => {
                            setRollingStockMileage(event.target.value);
                        }}
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
                        value={investigationDate}
                        onChange={(event) => {
                            setInvestigationDate(event.target.value);
                        }}
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
                        value={investigationTime}
                        onChange={(event) => {
                            setInvestigationTime(event.target.value);
                        }}
                    />
                </div>
                <DropdownList
                    options={receivedInternalManagers}
                    selectedIds={[]}
                    placeholder="Кликните, чтобы открыть список..."
                />
                <div className={styles.formColumn}>
                    <label className={styles.formColumnInputTextLabel} htmlFor="internal-managers-uuids">
                        Адресаты
                    </label>
                    <input
                        className={styles.formInputText}
                        type="text"
                        id="internal-managers-uuids"
                        name="internal-managers-uuids"
                        placeholder="uuid"
                        autoComplete="on"
                        value={internalManagersUuids}
                        /*onChange={(event) => {
                            setInternalManagersUuids(event.target.value);
                        }}*/
                    />
                </div>
                <div className={styles.formColumn}>
                    <label className={styles.formColumnInputTextLabel} htmlFor="commission-uuids">
                        Члены комиссии
                    </label>
                    <input
                        className={styles.formInputText}
                        type="text"
                        id="commission-uuids"
                        name="commission-uuids"
                        placeholder="uuid"
                        autoComplete="on"
                        value={commissionUuids}
                        /*onChange={(event) => {
                            setCommissionUuids(event.target.value);
                        }}*/
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
                        value={directorId}
                        onChange={(event) => {
                            setDirectorId(event.target.value);
                        }}
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
                        value={managerId}
                        onChange={(event) => {
                            setManagerId(event.target.value);
                        }}
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
                        value={performerId}
                        onChange={(event) => {
                            setPerformerId(event.target.value);
                        }}
                    />
                </div>
            </div>
            <button type="submit" className={styles.button} onClick={onSubmit}>
                Создать
            </button>
        </form>
    );
};
