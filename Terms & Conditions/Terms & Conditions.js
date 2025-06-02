document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.wizard_step');
    const stepIndicators = document.querySelectorAll('.progress_bar ul li');
    const progressFill = document.querySelector('.progress_fill');
    const prevBtn = document.querySelector('.prev_btn');
    const nextBtn = document.querySelector('.next_btn');
    const finishBtn = document.querySelector('.finish_btn');
    let currentStep = 0;
    const totalSteps = steps.length;

    function showStep(index) {
        steps.forEach((step, i) => {
            step.classList.toggle('active', i === index);
            if (i === index) {
                step.style.transitionDelay = '0.2s';
            }
        });
        stepIndicators.forEach((step, i) => {
            step.classList.toggle('active', i <= index);
            if (i === index) {
                step.style.transitionDelay = '0.1s';
            }
        });
        const progressWidth = (index / (totalSteps - 1)) * 100;
        progressFill.style.transitionDelay = '0s';
        progressFill.style.width = `${progressWidth}%`;

        prevBtn.classList.toggle('hidden', index === 0);
        nextBtn.classList.toggle('hidden', index === totalSteps - 1);
        finishBtn.classList.toggle('active', index === totalSteps - 1);

        currentStep = index;
    }

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            showStep(currentStep - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps - 1) {
            showStep(currentStep + 1);
        }
    });

    stepIndicators.forEach((step, index) => {
        step.addEventListener('click', () => {
            if (index <= currentStep) {
                showStep(index);
            }
        });
    });

    showStep(currentStep);
});