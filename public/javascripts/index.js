// window.addEventListener("load", (event) => {
// });


const deleteBtns = document.querySelectorAll('.delete-btn')


for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];

    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const answerId = e.target.id;
        console.log(answerId)
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

const deleteQuesBtns = document.querySelectorAll('.delete-btn')
console.log(deleteQuesBtns)

for (let i = 0; i < deleteQuesBtns.length; i++) {
    const btn = deleteBtns[i];

    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        console.log('!!!!!!!!!')
        const questionId = e.target.id;
        console.log(questionId)
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

