# Spell Overflow
Spell Overflow, a Stack Overflow clone, is a website for users to share brief thoughts, engage in light discussion, post memes, and spread propaganda (magic related).


## Creators
- [Chris Tsang](https://github.com/ctsang727)
- [Jason Li](https://github.com/itsjongy)
- [Luke Hodina](https://github.com/lhodina)
- [Stan Yee](https://github.com/stantm)


## How to start development environment
In order to start the development environment, `npm install` should be used to install dependencies and `npm start` to test. `.env-example` should be used to create a .env file.


## Technologies used
Spell Overflow used javascript, express, and sequelize for its creation. Pug and CSS were used for styling and Csurf and bcrypt were used for security.


## Link to live site
https://spell-overflow-2.herokuapp.com/


## Link to Wiki docs
https://github.com/lhodina/spell-overflow/wiki


## Discussion of two features that show off the team's technical abilities
One of the features that show off the team's technical abilities was our dynamic features of deleting question/answer. We were able to get our code to delete questions/answers without refreshing the page.

Another feature that show off the team's technical ability is figuring out a way for the edit and delete buttons to show up only for the logged in user and not for other user's questions/answers.


## Discussion of both challenges faced and the way the team solved them
One of the challenges that the team faced was bug fixing. There were small bugs that kept the workflow paused for an extended amount of time. Through the help of Rawaha, our TA, and hard work, we were able to squash bugs and get the website running.

Another challenge that the team faced was branch mangagement. We had millions of branches (not literally) and had a lot of confusion about what code was in what branch. Throughout the week of coding the project, the team got better at labeling branches and communicating about the contents of the branches.


## Code snippets to highlight the best code

### Dynamically Delete Answers
```javascript
router.delete('/answers/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await db.Answer.findByPk(answerId);
    await answer.destroy();

    res.json({message: 'Success'})
}));
```
```javascript
const deleteBtns = document.querySelectorAll('.delete-btn')

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];

    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const answerId = e.target.id;
        const res = await fetch(`/answers/${answerId}`, {
            method: 'DELETE'
        });
        const data = await res.json();

        if (data.message === "Success") {
            const container = document.querySelector(`#post-container-${answerId}`);
            container.remove();
        } else {

        };
    });
};
```

### Dynamically Delete Questions
```javascript
router.delete('/questions/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId);
    await question.destroy();

    res.json({ message: 'Success' })
}));
```

```javascript
const deleteQuesBtns = document.querySelectorAll('.delete-btn')

for (let i = 0; i < deleteQuesBtns.length; i++) {
    const btn = deleteBtns[i];

    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const questionId = e.target.id;
        const res = await fetch(`/questions/${questionId}`, {
            method: 'DELETE'
        });
        const data = await res.json();

        if (data.message === "Success") {
            const container = document.querySelector(`#post-container-${questionId}`);
            container.remove();
        } else {

        };
    });
};
```
