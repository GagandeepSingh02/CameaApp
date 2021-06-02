let request = indexedDB.open("camera", 3);

request.onsuccess = function (e) {
    db = request.result;
    let note = {
        nId: "jfbuverfu",
        txt: "hello I am Gagan",
    };
    let tx = db.transaction("gallery", "readwrite");
    let store = tx.objectStore("gallery");
    store.add(note);
}


request.onupgradeneeded = function (e) {
    let db = request.result;
    db.createObjectStore("gallery", { keyPath: "nId" });
}