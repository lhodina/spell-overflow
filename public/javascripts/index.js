// window.addEventListener("load", (event) => {
// });
console.log("hello from javascript!")

const deleteBtns = document.querySelectorAll('.delete-btn')

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];

    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const answerId = e.target.id;
        console.log(answerId);
        const res = await fetch(`/answers/${answerId}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data);

        if (data.message === "Success") {
            const container = document.querySelector(`#post-container-${answerId}`);
            container.remove();
        } else {

        };
    });
};
