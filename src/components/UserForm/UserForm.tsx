import { useState } from "react";
import styles from './UserForm.module.css'


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
        <form onSubmit={handleSubmit} className={styles.userForm}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                Gender:
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleChange}
                        />
                        Male
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleChange}
                        />
                        Female
                    </label>
                </div>
                
            </div>
            <div>
                <label>
                    Issue:
                    <textarea
                        name="issue"
                        value={formData.issue}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UserForm