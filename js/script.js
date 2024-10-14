async function submitQuiz() {
    const answers = document.querySelectorAll('input[name="question1"]:checked');
    if (answers.length > 0) {
        const selectedValue = answers[0].value;

        // Подготовка данных для отправки
        const data = { answer: selectedValue };
        
        try {
            const response = await fetch('#', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Спасибо за участе в опросе!');
            } else {
                alert('Ошибка при отправке данных, попробуйте снова.');
            }
        } catch (error) {
            alert(`Ошибка сети: ` + error.message);
        }
    } else {
        alert('Пожалуйста, выберите ответ.');
    }
}