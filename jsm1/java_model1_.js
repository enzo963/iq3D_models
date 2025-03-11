// app.js

  // تأثيرات زر الرجوع
  document.querySelector('.back-btn').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
  });

   document.querySelector('.back-btn').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
   });

document.addEventListener('DOMContentLoaded', function() {
    // الكود الأصلي
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyLoad = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
        });
    };
    const observer = new IntersectionObserver(lazyLoad);
    lazyImages.forEach(img => observer.observe(img));

    // كود jQuery المضاف
    $(document).ready(function() {
        // 1. تحسين تحميل الصور
        const lazyLoadImages = () => {
            $('img[data-src]').each(function() {
                const $img = $(this);
                if ($img.isInViewport()) {
                    $img.attr('src', $img.data('src')).removeAttr('data-src');
                }
            });
        };

        // 2. تفاعلية الزر الرجوع
        $('.back-btn').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#gallery').offset().top
            }, 800);
        });

        // 3. تحكمات المجسم التفاعلية
        $('.model-controls button').on('click', function() {
            const action = $(this).data('action');
            const $viewer = $('model-viewer');
            
            switch(action) {
                case 'rotate':
                    $viewer.attr('auto-rotate', !$viewer.attr('auto-rotate'));
                    break;
                case 'reset':
                    $viewer[0].cameraOrbit = '0deg 75deg 105%';
                    break;
            }
        });

        // 4. تحميل محتوى عند التمرير
        $(window).on('scroll', function() {
            lazyLoadImages();
        });

        // 5. تحسينات تجربة المستخدم
        $('.img-box').hover(
            function() { $(this).css('transform', 'scale(1.05)'); },
            function() { $(this).css('transform', 'scale(1)'); }
        );

        // دالة التحقق من ظهور العنصر في الشاشة
        $.fn.isInViewport = function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };
    });
});