const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".mobile-sidebar");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

const testimonialData = [
    {
        text: "The team turned my leaky roof into a strong shield. With their craftsmanship and the best materials, my house is now ready to weather any storm.",
        name: "Kende Attila",
        rating: 4,
        avatar: "images/worker1.png"
    },
    {
        text: "I had emergency plumbing issues at midnight and they arrived fast. Everything was fixed in one visit, and they explained every step clearly.",
        name: "Sarah Johnson",
        rating: 5,
        avatar: "images/worker2.png"
    },
    {
        text: "Booking was easy, the appointment was right on time, and the final results looked amazing. Reliable service with professional communication.",
        name: "Michael Brooks",
        rating: 4,
        avatar: "images/Working.png"
    }
];

const testimonialText = document.getElementById("testimonial-text");
const testimonialName = document.getElementById("testimonial-name");
const testimonialStars = document.getElementById("testimonial-stars");
const testimonialAvatar = document.getElementById("testimonial-avatar");
const testimonialPrev = document.getElementById("testimonial-prev");
const testimonialNext = document.getElementById("testimonial-next");
const testimonialDots = document.querySelectorAll(".how-dot");

let activeTestimonial = 0;

function renderStars(rating) {
    testimonialStars.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("i");
        star.classList.add("fa-solid", "fa-star");
        star.classList.add(i < rating ? "active" : "inactive");
        testimonialStars.appendChild(star);
    }
}

function updateTestimonial(index) {
    activeTestimonial = (index + testimonialData.length) % testimonialData.length;
    const item = testimonialData[activeTestimonial];

    testimonialText.textContent = item.text;
    testimonialName.textContent = item.name;
    testimonialAvatar.src = item.avatar;
    testimonialAvatar.alt = item.name;
    renderStars(item.rating);

    testimonialDots.forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === activeTestimonial);
    });
}

testimonialPrev.addEventListener("click", () => {
    updateTestimonial(activeTestimonial - 1);
});

testimonialNext.addEventListener("click", () => {
    updateTestimonial(activeTestimonial + 1);
});

testimonialDots.forEach((dot) => {
    dot.addEventListener("click", () => {
        updateTestimonial(Number(dot.dataset.index));
    });
});

updateTestimonial(0);

const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    const icon = questionBtn.querySelector("i");

    questionBtn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach((otherItem) => {
            otherItem.classList.remove("active");
            const otherBtn = otherItem.querySelector(".faq-question");
            const otherIcon = otherBtn.querySelector("i");
            otherBtn.setAttribute("aria-expanded", "false");
            otherIcon.classList.remove("fa-chevron-up");
            otherIcon.classList.add("fa-chevron-down");
        });

        if (!isActive) {
            item.classList.add("active");
            questionBtn.setAttribute("aria-expanded", "true");
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
        }
    });
});
