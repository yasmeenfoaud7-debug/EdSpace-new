document.addEventListener('DOMContentLoaded', () => {
    fetchTeachers();

    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBooking);
    }
});

async function fetchTeachers() {
    try {
        const res = await fetch('https://ed-space-new.vercel.app/api/teachers');
        const teachers = await res.json();

        const container = document.getElementById('teachersContainer');
       if (!container / !teachers / teachers.length === 0) return;

        container.innerHTML = teachers.map(t => 
            <div class="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <img src="${t.photo}" alt="${t.name}" class="w-32 h-32 object-cover rounded-full m-auto mt-4" />
                <h3 class="font-bold text-xl text-slate-800 text-center mt-2">${t.name}</h3>
                <p class="text-blue-600 font-medium text-sm mt-1 text-center">${t.subject}</p>
                <p class="text-slate-500 text-sm mt-3 px-4 pb-4 text-center">${t.bio}</p>
            </div>
        ).join('');
    } catch (err) {
        console.error('خطأ في جلب بيانات المدرسين', err);
    }
}