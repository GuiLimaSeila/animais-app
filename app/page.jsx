'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
        <h1>Animals</h1>
        <ul>
            {
            dadosApi?(
            dadosApi.data.map((animal) => (
            <div key={animal.id}>
                <h2>Nome: {animal.name}</h2>
                <p>Idade: {animal.age}</p>
                <p>Tipo: {animal.type}</p>
                <p>Cor: {animal.color}</p>
                <p>Vacinado?: {animal.statusVaccine}</p>
                <img src={animal.image} alt={animal.name} />
                
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