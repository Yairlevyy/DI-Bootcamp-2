const fs = require('fs')

const displayQuest = async (req, res) => {
  try {
    const data = await fs.readFileSync('quiz.json', { encoding: 'utf8' });
    const quizData = JSON.parse(data);
    let actual_question_id = quizData.user_infos.actual_question;
    let question_id_updated;
    if (actual_question_id >= 5) {
        question_id_updated = 1;
    } else {
        question_id_updated = actual_question_id + 1;
    }
    const next_question = quizData.quiz_questions.find(item => item.id === question_id_updated);
    quizData.user_infos.actual_question = question_id_updated;
    await fs.writeFileSync('quiz.json', JSON.stringify(quizData, null, 2), { encoding: 'utf8' });
    res.json(next_question);
  } catch (error) {
    console.error('Error reading or writing file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const submitAnswer = async (req, res) => {
  try {
    const { response, question_id } = req.body;
    const data = await fs.readFileSync('quiz.json', { encoding: 'utf8' });
    const quizData = JSON.parse(data);
    const actual_question = quizData.quiz_questions.find(item => item.id === Number(question_id));
    const question_id_updated = Number(question_id) + 1;
    const next_question = quizData.quiz_questions.find(item => item.id === question_id_updated);
    let actual_question_id = quizData.user_infos.actual_question;
    actual_question_id = question_id_updated;
    if (response.toLowerCase() === actual_question.answer.toLowerCase()) {
      quizData.user_infos.user_score += 1;
      await fs.writeFileSync('quiz.json', JSON.stringify(quizData, null, 2), { encoding: 'utf8' });
      res.send(`Great job! Here is the next question: ${next_question.question}`);
    } else {
      await fs.writeFileSync('quiz.json', JSON.stringify(quizData, null, 2), { encoding: 'utf8' });
      res.send(`Wrong! The correct answer was: ${actual_question.answer}. Here is the next question: ${next_question.question}`);
    }
  } catch (error) {
    console.error('Error reading or writing file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getScore = async (req, res) => {
  try {
    const data = await fs.readFileSync('quiz.json', { encoding: 'utf8' });
    const quizData = JSON.parse(data);
    const score = quizData.user_infos.user_score;
    res.json(score);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  displayQuest,
  submitAnswer,
  getScore
};
