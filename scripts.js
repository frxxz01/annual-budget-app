// 图表数据
let monthlyData = {
  income: [100, 200, 300, 150, 250, 300, 350, 400, 450, 500, 550, 600],
  expense: [80, 150, 200, 100, 120, 180, 250, 270, 300, 350, 400, 450]
};

let selectedMonth = 1;
let selectedType = 'income';

// 更新图表
function updateCharts() {
  const monthIncome = monthlyData.income[selectedMonth - 1];
  const monthExpense = monthlyData.expense[selectedMonth - 1];

  // 绘制月度图表
  const monthlyChart = new Chart(document.getElementById('monthly-chart'), {
    type: 'bar',
    data: {
      labels: ['收入', '支出'],
      datasets: [{
        label: `第 ${selectedMonth} 月`,
        data: [monthIncome, monthExpense],
        backgroundColor: ['#4caf50', '#f44336']
      }]
    }
  });

  // 绘制年度图表
  const yearlyChart = new Chart(document.getElementById('yearly-chart'), {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      datasets: [{
        label: '年度收入',
        data: monthlyData.income,
        borderColor: '#4caf50',
        fill: false
      }, {
        label: '年度支出',
        data: monthlyData.expense,
        borderColor: '#f44336',
        fill: false
      }]
    }
  });
}

// 处理月份和类型切换
document.getElementById('month-select').addEventListener('change', (e) => {
  selectedMonth = parseInt(e.target.value);
  updateCharts();
});

document.getElementById('income-btn').addEventListener('click', () => {
  selectedType = 'income';
  updateCharts();
});

document.getElementById('expense-btn').addEventListener('click', () => {
  selectedType = 'expense';
  updateCharts();
});

// 初始化
updateCharts();
