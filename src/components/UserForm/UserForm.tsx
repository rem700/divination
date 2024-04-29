import { useState } from "react";
import styles from './UserForm.module.css'
import CardsLayout from "../CardsLayout/CardsLayout";
import DivinationText from "../DivinationText/DivinationText";
import useData from "./data/useData";
import getRandomCards from "../../utils/getRandomCards";
import TarotCard from "../../types/tarotCard";


function UserForm() {
    const {tarotCards} = useData();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        issue: ''
    });
    const [selectedCards, setSelectedCards] = useState<TarotCard[]>([])
    const [divination, setDivination] = useState<string>('');

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const cards = getRandomCards(tarotCards, 3);
        setSelectedCards(cards);
        const inputText = `${formData.name} ${formData.age} ${formData.issue} ${cards.map(card => card.name).join(', ')}`;
        
        
        try {
            const response = await fetch('/generate-prediction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: inputText })
            });
            const data = await response.json();
            setDivination(data.prediction); // Обновление состояния с предсказанием
        } catch (error) {
            console.error('Error fetching prediction:', error);
            setDivination("Ошибка при получении предсказания.");
        }
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
                <CardsLayout selectedCards={selectedCards}/>
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