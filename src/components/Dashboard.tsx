import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto'; // Importe o pacote Chart.js

const Dashboard = () => {
  const [userData, setUserData] = useState({
    investimento: 1000,
    cartaoCredito: 1234,
    contaLuz: 150,
    comprasMercado: 200, // Adicione um ponto e vírgula aqui
  });
  
  const chartRef = useRef<Chart<"bar", number[], string> | null>(null);

  const updateUserData = (field: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const data = {
    labels: ['Investimento', 'Cartão de Crédito', 'Conta de Luz', 'Compras no Mercado'],
    datasets: [
      {
        label: 'Informações do Usuário',
        data: [userData.investimento, userData.cartaoCredito, userData.contaLuz, userData.comprasMercado],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    // Destrói o gráfico anterior antes de renderizar um novo
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Cria um novo gráfico
    const ctx = document.getElementById('myChart') as HTMLCanvasElement | null;
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Retorna uma função de limpeza para destruir o gráfico ao desmontar o componente
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, padding: '60px' }}>
        <h2>Informações do Usuário</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="investimento" style={{ marginBottom: '5px' }}>Investimento:</label>
            <input type="number" id="investimento" value={userData.investimento} onChange={(e) => updateUserData('investimento', e.target.value)} style={{ width: '100px', textAlign: 'center' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="cartaoCredito" style={{ marginBottom: '5px' }}>Cartão de Crédito:</label>
            <input type="number" id="cartaoCredito" value={userData.cartaoCredito} onChange={(e) => updateUserData('cartaoCredito', e.target.value)} style={{ width: '100px', textAlign: 'center' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="contaLuz" style={{ marginBottom: '5px' }}>Conta de Luz:</label>
            <input type="number" id="contaLuz" value={userData.contaLuz} onChange={(e) => updateUserData('contaLuz', e.target.value)} style={{ width: '100px', textAlign: 'center' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="comprasMercado" style={{ marginBottom: '5px' }}>Compras no Mercado:</label>
            <input type="number" id="comprasMercado" value={userData.comprasMercado} onChange={(e) => updateUserData('comprasMercado', e.target.value)} style={{ width: '100px', textAlign: 'center' }} />
          </div>
        </div>
      </div>
      <div style={{ flex: 2, padding: '60px' }}>
        <h2>Gráfico</h2>
        <div style={{ height: '600px', width: '800px' }}>
          <canvas id="myChart"></canvas>
        </div>  
      </div>
    </div>
  );
};

export default Dashboard;
