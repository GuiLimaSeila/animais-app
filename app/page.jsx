'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './page.module.css'

export default function Home() {
    const [dadosApi, setDadosApi] = useState('');

    useEffect(() => {

      const animalFetch = async () => {
          try {
              const dados = await axios.get('/api/animals')
                  setDadosApi(dados)

          } catch (error) {
              throw error;
          }
      };
      animalFetch();
  }, []);

  console.log("Aqui");
  console.log(dadosApi);

  return (
    <div className={styles.bckg}>
        <h1>Animals</h1>
        <ul className={styles.dualdiv}>
            {
            dadosApi?(
            dadosApi.data.map((animal) => (
            <div key={animal.id} className={styles.redcard}>
                <h2 className={styles.nomalCentralizedText}>Nome: {animal.name}</h2>
                <p className={styles.whitetext}>Idade: {animal.age}</p>
                <p className={styles.whitetext}>Tipo: {animal.type}</p>
                <p className={styles.whitetext}>Cor: {animal.color}</p>
                <p className={styles.whitetext}>Vacinado ?: {animal.status}</p>
                <img src={animal.image} alt={animal.name} className={styles.image}/>
                
            </div>
            ))
            ):(
                <p>Carregando...</p>
            )
}
        </ul>
    </div>
  );
}