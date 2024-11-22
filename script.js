
        let rowToEdit = null;  // Variable to track the row being edited

        // Toggle form visibility
        function toggleForm() {
            const formContainer = document.getElementById('form-container');
            formContainer.classList.toggle('hidden');
            if (rowToEdit) {
                populateForm(rowToEdit);
            }
        }

        // Reset the form fields
        function resetForm() {
            document.getElementById('data-form').reset();
            rowToEdit = null;  // Clear the edit reference
            toggleForm(); // Hide the form
        }

        // Populate the form with data from the selected row
        function populateForm(row) {
            const cells = row.querySelectorAll('td');
            document.getElementById('nombre').value = cells[0].textContent;
            document.getElementById('apellido').value = cells[1].textContent;
            document.getElementById('correo').value = cells[2].textContent;
            document.getElementById('domicilio').value = cells[3].textContent;
            document.getElementById('ciudad').value = cells[4].textContent;
        }

        // Edit row functionality
        function editRow(button) {
            rowToEdit = button.closest('tr');  // Track which row is being edited
            toggleForm();  // Show the form to edit
        }

        // Delete row functionality
        function deleteRow(button) {
            const row = button.closest('tr');
            row.remove();
        }

        // Handle form submission (Add new or Update data)
        document.getElementById('data-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const correo = document.getElementById('correo').value;
            const domicilio = document.getElementById('domicilio').value;
            const ciudad = document.getElementById('ciudad').value;

            if (rowToEdit) {
                // Update the existing row
                const cells = rowToEdit.querySelectorAll('td');
                cells[0].textContent = nombre;
                cells[1].textContent = apellido;
                cells[2].textContent = correo;
                cells[3].textContent = domicilio;
                cells[4].textContent = ciudad;
            } else {
                // Add a new row
                const newRow = `
                    <tr>
                        <td>${nombre}</td>
                        <td>${apellido}</td>
                        <td>${correo}</td>
                        <td>${domicilio}</td>
                        <td>${ciudad}</td>
                        <td>
                            <button class="btn btn-update" onclick="editRow(this)">Actualizar</button>
                            <button class="btn btn-delete" onclick="deleteRow(this)">Eliminar</button>
                        </td>
                    </tr>
                `;
                document.getElementById('table-body').insertAdjacentHTML('beforeend', newRow);
            }

            resetForm();  // After saving, reset the form and hide it
        });
   