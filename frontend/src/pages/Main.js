import React, { useEffect, useState } from "react";
import './Main.css'

import api from '../services/api';

export default function Main({ match }) {
    const [numero, setNumero] = useState('');
    const [tom, setTom] = useState('');
    const [letra, setLetra] = useState('');
    const [cifras, setCifras] = useState('');

    useEffect(() => {
        loadCifras();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        
        await api.post(`/cifras`, {
            numero,
            tom,
            letra
        })

        loadCifras();
        alert('numero Cadastrado!');
        // setNumero('');
        // setTom('');
        // setLetra('');

    }

    async function handleEdit(id) {
       
        await api.get(`/cifras`, {
            numero,
            tom,
            letra
        })

        loadCifras();
        alert('numero Cadastrado!');
        // setNumero('');
        // setTom('');
        // setLetra('');

    }

    async function loadCifras() {
        const response = await api.get(`/cifras`);
        setCifras(response.data);
    }

    return (
        <div className="main-container"> 
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nº do numero </label>
                    <input 
                        className="input" 
                        type="number" 
                        value={numero}
                        onChange={e => setNumero(e.target.value)}    
                    />
                </div>
                <br />

                <div>
                <label>Tom </label>
                    <select 
                        value={tom} 
                        onChange={e => setTom(e.target.value)} 
                        name="tom" 
                        className="input select">
                            <option value="">-</option>
                            <option value="A">A</option>
                            <option value="Am">Am</option>
                            <option value="Bb">Bb</option>
                            <option value="Bbm">Bbm</option>
                            <option value="B">B</option>
                            <option value="Bm">Bm</option>
                            <option value="C">C</option>
                            <option value="Cm">Cm</option>
                            <option value="C#m">C#m</option>
                            <option value="Db">Db</option>
                            <option value="D">D</option>
                            <option value="Dm">Dm</option>
                            <option value="D#m">Ebm</option>
                            <option value="Eb">Eb</option>
                            <option value="E">E</option>
                            <option value="Em">Em</option>
                            <option value="F">F</option>
                            <option value="Fm">Fm</option>
                            <option value="F#">F#</option>
                            <option value="F#m">F#m</option>
                            <option value="G">G</option>
                            <option value="Gm">Gm</option>
                            <option value="G#m">G#m</option>
                            <option value="Ab">Ab</option>
                    </select>
            </div>
                <br />

                <div>
                <textarea 
                        value={letra}
                        onChange={e => setLetra(e.target.value)}
                        name="cifra" 
                        id="txt_cifra" 
                        className="cifra input" />
                </div>
                <br />

                <button type="submit">Salvar</button>
            </form>

            <h2>Lista</h2>
            {cifras.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Número numeros</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cifras.map(cifra => ( 
                            <tr key={cifra._id} >
                                <td >
                                    {cifra.numero}
                                </td>
                                <td>
                                    <button type="button" onClick={ () => handleEdit(cifra._id)}>Editar</button>
                                    <button type="button">Deletar</button>
                                </td>   
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="empty">Nenhum hino cadastrado =(</div>
            )}
        </div>
    )
}