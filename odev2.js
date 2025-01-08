document.addEventListener("DOMContentLoaded", function () {
    // HTML öğelerini seçiyoruz
    const addButton = document.getElementById("liveToastBtn"); // "Ekle" butonu
    const inputField = document.getElementById("task"); // Kullanıcının iş gireceği input
    const taskList = document.getElementById("list"); // Listeyi tutacağımız <ul>

    // Toast bildirimlerini seçiyoruz
    const successToast = document.getElementById("liveToast"); // Başarılı ekleme bildirimi
    const errorToast = document.querySelector(".error"); // Hatalı ekleme bildirimi

    // 1. Yeni görev eklemek
    function addTask() {
        const taskText = inputField.value.trim(); // Input'tan gelen metni alıyoruz

        // Eğer input boşsa bir şey eklemiyoruz
        if (taskText === "") {
            // Hata bildirimi
            errorToast.classList.remove("hide");
            setTimeout(() => errorToast.classList.add("hide"), 4000);
            return;
        }

        // Yeni bir liste elemanı (li) oluşturuyoruz
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        newTask.classList.add("list-group-item");

        // Görevi tamamlanmış olarak işaretleme (tek tıklama)
        newTask.addEventListener("click", function () {
            newTask.classList.toggle("checked");
        });

        // Görevi silme (çift tıklama ile)
        newTask.addEventListener("dblclick", function () {
            taskList.removeChild(newTask);
        });

        // Yeni öğeyi listeye ekliyoruz
        taskList.appendChild(newTask);

        // Başarılı ekleme bildirimi
        successToast.classList.remove("hide");
        setTimeout(() => successToast.classList.add("hide"), 4000);

        // Input'u boşaltıyoruz
        inputField.value = "";
    }

    // 2. Ekle butonuna tıklanınca addTask fonksiyonunu çalıştırıyoruz
    addButton.addEventListener("click", addTask);

    // 3. "Enter" tuşuna basılınca da aynı fonksiyonu çalıştırıyoruz
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // 4. Sayfa yüklendikten sonra mevcut tüm öğelere event listener ekleyelim:
    function initializeExistingTasks() {
        const tasks = taskList.querySelectorAll("li");

        tasks.forEach(task => {
            // Mevcut görevleri tamamlanmış olarak işaretleme
            task.addEventListener("click", function () {
                task.classList.toggle("checked");
            });

            // Mevcut görevleri silme
            task.addEventListener("dblclick", function () {
                taskList.removeChild(task);
            });
        });
    }

    // Mevcut görevleri başlatırken event listener ekleyelim
    initializeExistingTasks();
});
