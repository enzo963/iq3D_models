// بيانات المجسمات
const models = {
    '1': {
        title: '’model1',
        file: 'models/model1.glb',
        description: 'وصف النموذج الأول...'
    },
    '2': {
        title: ' model2',
        file: 'models/model2.glb',
        description: 'وصف النموذج الثاني...'
    }
     '3': {
        title: 'model3',
        file: 'models/model1.glb',
        description: 'وصف النموذج الأول...'
    },
    '4': {
        title: 'model4',
        file: 'models/model2.glb',
        description: 'وصف النموذج الثاني...'
    }
};

// دالة تحميل المحتوى
function loadModel() {
    const modelId = new URLSearchParams(window.location.search).get('id');
    const model = models[modelId];
    
    if (!model) {
        window.location.href = '404.html';
        return;
    }

    document.title = model.title;
    
    const container = document.getElementById('model-container');
    container.innerHTML = `
        <header class="model-header">
            <a href="index.html" class="back-btn">← العودة</a>
            <h1>${model.title}</h1>
        </header>
        ...
    `;
}

// تشغيل الدالة عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', loadModel);