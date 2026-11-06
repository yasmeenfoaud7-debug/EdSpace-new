document.addEventListener('DOMContentLoaded', () => {
    fetchTeachers();

    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBooking);
    }
});


async function fetchTeachers() {
    try {
        const res = await fetch('/api/teachers');
        const teachers = await res.json();
        
        const container = document.getElementById('teachersContainer');
        if (!container || teachers.length === 0) return;

        container.innerHTML = teachers.map(t => 
            <div class="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 text-center p-6">
                <img src="${t.photo}" alt="${t.name}" class="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-50" />
                <h3 class="font-bold text-xl text-slate-800">${t.name}</h3>
                <p class="text-blue-600 font-medium text-sm mt-1">${t.subject}</p>
                <p class="text-slate-500 text-sm mt-3">${t.bio}</p>
            </div>
        ).join('');
    } catch (err) {
        console.error('خطأ في جلب بيانات المدرسين:', err);
    }
}


async function handleBooking(e) {
    e.preventDefault();

    const bookingData = {
        studentName: e.target[0].value,
        studentPhone: e.target[1].value,
        parentPhone: e.target[2].value,
        grade: e.target[3].value
    };

    try {
        const res = await fetch('/api/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        });

        if (res.ok) {
            alert('تم تسجيل طلب الحجز في سنتر المجد بنجاح!');
            e.target.reset();
        } else {
            alert('حدث خطأ أثناء الحجز، يرجى المحاولة لاحقاً.');
        }
    } catch (err) {
        console.error('خطأ في الاتصال بالسيرفر:', err);
    }
}