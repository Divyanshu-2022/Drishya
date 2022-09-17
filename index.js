function Delete(no) {
    document.getElementById("row" + no).outerHTML = "";
}

function add() {
    var A_new = document.getElementById("new_A").value;
    console.log(A_new);
    var B_new = document.getElementById("new_B").value;
    console.log(B_new);
    var C_new = document.getElementById("new_C").value;
    console.log(C_new);

    var table = document.getElementById("table");
    var table_length = table.rows.length - 1;

    var row = (table.insertRow(table_length).outerHTML =
        "<tr id='row" +
        table_length +
        "'><td id='A" +
        table_length +
        "'>" +
        A_new +
        "</td><td id='B" +
        table_length +
        "'>" +
        B_new +
        "</td><td id='C" +
        table_length +
        "'>" +
        C_new +
        "</td><td><input type='button' value='Delete' class='delete' onclick='Delete(" +
        table_length +
        ")'></td></tr>");

    document.getElementById("new_A").value = "";
    document.getElementById("new_B").value = "";
    document.getElementById("new_C").value = "";
}