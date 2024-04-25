import { useState } from "react";
import styles from './UserForm.module.css'
import CardsLayout from "../CardsLayout/CardsLayout";
import DivinationText from "../DivinationText/DivinationText";


function UserForm() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        issue: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
            <div className={styles.formSide}>
                <div className={styles.inputGroup}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Issue:</label>
                    <textarea
                        name="issue"
                        rows={3}
                        value={formData.issue}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={styles.formCenter}>
                <CardsLayout />
                <DivinationText />
                <button type="submit">Submit</button>
            </div>
            <div className={styles.formSide}>
                <div className={styles.inputGroup}>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroupRadio}>
                    <div className={styles.radioButtons}>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleChange}
                        />
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleChange}
                        />
                    
                    </div>
                    
                </div>
                
            </div>

            
        </form>
    )
}

export default UserForm