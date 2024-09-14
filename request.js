<script>
    // Function to view more details (parameterized modal)
    function viewDetails(index) {
        let requests = JSON.parse(localStorage.getItem('travelRequests')) || [];
        const request = requests[index];
    
        // Populate the modal content dynamically
        document.getElementById('modalEmpName').textContent = request.empName;
        document.getElementById('modalDestination').textContent = request.destination;
        document.getElementById('modalCause').textContent = request.cause;
        document.getElementById('modalFromDate').textContent = request.fromDate;
        document.getElementById('modalArrivalDate').textContent = request.arrivalDate;
        document.getElementById('modalNoOfDays').textContent = request.noOfDays;
        document.getElementById('modalPriority').textContent = request.priority;
    
        // Show the modal
        const myModal = new bootstrap.Modal(document.getElementById('detailsModal'));
        myModal.show();
    }
    </script>
