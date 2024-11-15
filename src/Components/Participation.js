import React, { useState } from 'react';
import './Participation.css';
import Phone from '../Assets/phone.png';

const Participation = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [individualName, setIndividualName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [familyCount, setFamilyCount] = useState('');
    const [decision, setDecision] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleDecisionChange = (event) => {
        setDecision(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = {
            type: selectedOption,
            name: selectedOption === 'Jednotlivec' ? individualName : familyName,
            count: selectedOption === 'Jednotlivec' ? 1 : familyCount,
            decision: decision
        };

        try {
            const response = await fetch('http://localhost:3001/participation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                // Reset form fields
                setSelectedOption('');
                setIndividualName('');
                setFamilyName('');
                setFamilyCount('');
                setDecision('');
            } else {
                alert(result.error);
            }
        } catch (error) {
            console.error('Chyba při odesílání dat:', error);
            alert('Nastala chyba při odesílání dat.');
        }
    };

    return (
        <div className='Participation'>
            <div className='Participation-Form'>
                <p className='Participation-Form-Title'>Potvrďte svou účast</p>
                <form onSubmit={handleSubmit}>
                    <div className='Participation-Form-Item'>
                        <label htmlFor="Name">Jednotlivec/Rodina *</label>
                        <select id="Name" value={selectedOption} onChange={handleSelectChange}>
                            <option value=""></option>
                            <option value="Jednotlivec">Jednotlivec</option>
                            <option value="Rodina">Rodina</option>
                        </select>
                    </div>

                    {selectedOption === 'Jednotlivec' && (
                        <div className='Participation-Form-Item'>
                            <label htmlFor="individualName">Jméno a příjmení *</label>
                            <input
                                type="text"
                                id="individualName"
                                value={individualName}
                                onChange={(e) => setIndividualName(e.target.value)}
                            />
                        </div>
                    )}

                    {selectedOption === 'Rodina' && (
                        <>
                            <div className='Participation-Form-Item'>
                                <label htmlFor="familyName">Rodina *</label>
                                <input
                                    type="text"
                                    id="familyName"
                                    value={familyName}
                                    onChange={(e) => setFamilyName(e.target.value)}
                                />
                            </div>
                            <div className='Participation-Form-Item'>
                                <label htmlFor="familyCount">Počet členů *</label>
                                <input
                                    type="number"
                                    id="familyCount"
                                    value={familyCount}
                                    onChange={(e) => setFamilyCount(e.target.value)}
                                    min="2"
                                />
                            </div>
                        </>
                    )}

                    <div className='Participation-Form-Item'>
                        <label htmlFor="Decision">Účast *</label>
                        <select id='Decision' value={decision} onChange={handleDecisionChange}>
                            <option value=""></option>
                            <option value="Zúčastní se">Zúčastním(e) se</option>
                            <option value="Nezúčastní se">Nezúčastním(e) se</option>
                        </select>
                    </div>

                    <button type='submit' className='Participation-Form-Button'>Potvrdit</button>
                </form>
            </div>
            <div className='Participation-Info'>
                <div className='Participation-Info-Text'>
                    <p>Máte nějaký dotaz?</p>
                    <p>Obraťte se na svědkyni nevěsty.</p>
                </div>
                <div className='Participation-Info-Contact'>
                    <p className='Participation-Info-Contact-Name'>Věra Nesvarbová</p>
                    <div className='Participation-Info-Contact-Tel'>
                        <img src={Phone} alt="Phone" />
                        <a href='tel:+420608983591'>+420 608 983 591</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participation;
