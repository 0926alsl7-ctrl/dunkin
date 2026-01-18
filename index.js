document.addEventListener('DOMContentLoaded', function() {
    // 네가 만든 ID 그대로 사용
    const toggleBtn = document.getElementById('dunkinToggle');

    if(toggleBtn) {
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault(); // 링크 이동 방지
            
            // active 클래스만 토글 (네 CSS가 알아서 디자인 바꿈)
            this.classList.toggle('active');
            
            // 웹표준 접근성 속성 업데이트 (선택사항이지만 있으면 좋음)
            const isChecked = this.classList.contains('active');
            this.setAttribute('aria-checked', isChecked);
            this.setAttribute('data-state', isChecked ? 'checked' : 'unchecked');
        });
    }
});
