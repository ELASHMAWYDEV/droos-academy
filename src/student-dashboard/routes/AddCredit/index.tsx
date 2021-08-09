import React from "react";
import { FiUpload } from "react-icons/fi";

//Styles
import styles from "./index.module.scss";

const AddCredit = () => {
  return (
    <div className={styles.addCredit}>
      <h2>شحن الرصيد</h2>
      <div className={styles.inputContainer}>
        <h3>شحن عن طريق الكود</h3>
        <div>
          <input type="text" placeholder="ادخل الكود" />
          <button>شحن</button>
        </div>
      </div>
      <div className={styles.container}>
        <h3>طرق الدفع</h3>
        <div className={styles.selectItem}>
          <select>
            <option selected>فودافون كاش</option>
          </select>
          <span></span>
        </div>
        <span>كيف أدفع؟</span>
        <p>
          قم بتحويل المبلغ الذي تريد شحنه الي رقم 01064544529 ورفع صورة المعاملة
          وسوف يقوم أحد موظفينا بإضافة الرصيد الي حسابك
        </p>
        <div className={styles.dashLine}></div>
        <div className={styles.price}>
          <input type="text" placeholder="المبلغ" />
        </div>
        <div className={styles.uploadButton}>
          <button>
            <FiUpload />
            رفع صورة المعاملة
          </button>
        </div>
        <div className={styles.submitButton}>
          <button>تأكيد</button>
        </div>
      </div>
    </div>
  );
};

export default AddCredit;
