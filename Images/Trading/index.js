// Function to display content based on the passed content ID
function showContent(contentId) {
    // Hide all content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected content section
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

// Toggle the visibility of the subscriber's details
function toggleViewDetails(icon) {
    const row = icon.closest('tr'); // Get the closest <tr> to the icon
    const subscriberId = row.cells[2].textContent; // Get the Trading View Id (column 3)
    
    // Find the details row (next row) using the subscriberId
    const detailsRow = document.getElementById('details-' + subscriberId.substring(2)); // e.g., details-1

    // Toggle visibility
    if (detailsRow.style.display === "none") {
        detailsRow.style.display = "table-row"; // Show details
    } else {
        detailsRow.style.display = "none"; // Hide details
    }
}

// Delete subscriber function
function deleteSubscriber(icon) {
    const row = icon.closest('tr');  // Get the closest <tr> to the icon
    row.remove();  // Remove the row from the table
    alert('Subscriber deleted');
}

// Sample subscriber data
const subscribersData = {
    'REF123': [
        { id: 'S001', phone: '1234567890', email: 'user1@example.com', status: 'Active' },
        { id: 'S002', phone: '1234567891', email: 'user2@example.com', status: 'Inactive' }
    ],
    'REF456': [
        { id: 'S003', phone: '1234567892', email: 'user3@example.com', status: 'Active' }
    ],
    'REF789': [
        { id: 'S004', phone: '1234567893', email: 'user4@example.com', status: 'Inactive' }
    ]
};

let selectedReferralId = '';
let selectedIndex = -1;

function showSubscribers(referralId) {
    selectedReferralId = referralId;
    document.getElementById('referralIdDisplay').textContent = referralId;
    const subscribers = subscribersData[referralId];
    const tableBody = document.getElementById('subscriberTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    subscribers.forEach((subscriber, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${subscriber.id}</td>
            <td>${subscriber.phone}</td>
            <td>${subscriber.email}</td>
            <td>${subscriber.status}</td>
            <td><span class="action-btn" onclick="openDeleteModal('${referralId}', ${index})">Delete</span></td>
        `;
        tableBody.appendChild(row);
    });

    // Toggle visibility: Main list hidden, subscribers list shown
    document.getElementById('mainUsersList').style.display = 'none';
    document.getElementById('content-referralSubscribersList').style.display = 'block';
}

function backToMainUsersList() {
    document.getElementById('mainUsersList').style.display = 'block';
    document.getElementById('content-referralSubscribersList').style.display = 'none';
}

function openDeleteModal(referralId, index) {
    selectedReferralId = referralId;
    selectedIndex = index;
    document.getElementById('deleteModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('deleteModal').style.display = 'none';
}

function deleteReferral() {
    if (selectedReferralId && selectedIndex !== -1) {
        // Remove the selected subscriber
        subscribersData[selectedReferralId].splice(selectedIndex, 1);
        showSubscribers(selectedReferralId); // Refresh the table
    }
    closeModal();
}

function searchReferralIds() {
    const input = document.getElementById('referralSearch').value.toUpperCase();
    const listItems = document.querySelectorAll('#referralIds li');
    let found = false;
    listItems.forEach(item => {
        const referralId = item.textContent.toUpperCase();
        if (referralId.indexOf(input) > -1) {
            item.style.display = '';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (!found) {
        alert('Referral ID not found!');
    }
}

// Function to toggle and show modal with details
function toggleViewDetails(icon) {
    // Get the current row containing the clicked icon
    var row = icon.closest('tr');
    
    // Extract subscriber details from the row
    var subscriberDetails = {
        date: row.cells[1].textContent,
        referralId: row.cells[2].textContent,
        tradingViewId: row.cells[3].textContent,
        phoneNumber: row.cells[4].textContent,
        emailId: row.cells[5].textContent,
        phone: row.cells[6].textContent,
        pricing: row.cells[7].textContent,
        paidConfirm: row.cells[8].textContent,
        commission: row.cells[9].textContent,
        expiryDate: row.cells[10].textContent,
        remainingDays: row.cells[11].textContent,
    };
    
    // Get the modal and modal details container
    var modal = document.getElementById('detailsModal');
    var modalDetails = document.getElementById('modalDetails');
    
    // Populate the modal with subscriber details
    modalDetails.innerHTML = `
        <p><strong>Date:</strong> ${subscriberDetails.date}</p>
        <p><strong>Referral Id:</strong> ${subscriberDetails.referralId}</p>
        <p><strong>Trading View Id:</strong> ${subscriberDetails.tradingViewId}</p>
        <p><strong>Phone Number:</strong> ${subscriberDetails.phoneNumber}</p>
        <p><strong>Email Id:</strong> ${subscriberDetails.emailId}</p>
        <p><strong>Phone:</strong> ${subscriberDetails.phone}</p>
        <p><strong>Pricing:</strong> ${subscriberDetails.pricing}</p>
        <p><strong>Paid Confirm:</strong> ${subscriberDetails.paidConfirm}</p>
        <p><strong>Commission:</strong> ${subscriberDetails.commission}</p>
        <p><strong>Expiry Date:</strong> ${subscriberDetails.expiryDate}</p>
        <p><strong>Remaining Days:</strong> ${subscriberDetails.remainingDays}</p>
    `;
    
    // Display the modal
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('detailsModal');
    modal.style.display = "none";
}

// Close the modal if clicked outside
window.onclick = function(event) {
    var modal = document.getElementById('detailsModal');
    if (event.target == modal) {
        closeModal();
    }
}

function toggleViewDetails(icon) {
    // You can add logic to toggle details or open a modal, for example
    // Example: Toggle visibility of details section
    var row = icon.closest('tr'); // Get the row the icon is in
    var detailsRow = row.nextElementSibling; // Assuming details row is right below the current row
    
    if (detailsRow && detailsRow.classList.contains('details')) {
        detailsRow.style.display = detailsRow.style.display === 'none' ? 'table-row' : 'none';
    } else {
        console.log('No details available or implementation missing.');
    }
}


// Open the modal and display subscriber details
function toggleViewDetails(icon) {
    // Get the row where the icon is clicked
    var row = icon.closest('tr');
    
    // Get the subscriber details from the row
    var details = {
        date: row.cells[1].innerText,
        referralId: row.cells[2].innerText,
        tradingViewId: row.cells[3].innerText,
        phoneNumber: row.cells[4].innerText,
        emailId: row.cells[5].innerText,
        pricing: row.cells[7].innerText,
        paidConfirm: row.cells[8].innerText,
        commission: row.cells[9].innerText,
        expiryDate: row.cells[10].innerText,
        remainingDays: row.cells[11].innerText,
    };
    
    // Get the modal and the modal content element
    var modal = document.getElementById('viewModal');
    var modalDetails = document.getElementById('modalDetails');
    
    // Populate the modal with the subscriber details
    modalDetails.innerHTML = `
        <strong>Date:</strong> ${details.date}<br>
        <strong>Referral Id:</strong> ${details.referralId}<br>
        <strong>Trading View Id:</strong> ${details.tradingViewId}<br>
        <strong>Phone Number:</strong> ${details.phoneNumber}<br>
        <strong>Email Id:</strong> ${details.emailId}<br>
        <strong>Pricing:</strong> ${details.pricing}<br>
        <strong>Paid Confirm:</strong> ${details.paidConfirm}<br>
        <strong>Commission:</strong> ${details.commission}<br>
        <strong>Expiry Date:</strong> ${details.expiryDate}<br>
        <strong>Remaining Days:</strong> ${details.remainingDays}<br>
    `;
    
    // Show the modal
    modal.style.display = "block";
}

// Close the modal
function closeModal() {
    var modal = document.getElementById('viewModal');
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('viewModal');
    if (event.target === modal) {
        closeModal();
    }
};
