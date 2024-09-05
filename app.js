// Get all the tab buttons and tab panels
const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

// Function to handle tab switching
function handleTabClick(event) {
  // Remove aria-selected from all tabs and hide all tab panels
  tabs.forEach((tab) => {
    tab.setAttribute('aria-selected', 'false');
  });
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  // Set the clicked tab as selected
  const clickedTab = event.currentTarget;
  clickedTab.setAttribute('aria-selected', 'true');

  // Show the corresponding tab panel
  const panelId = clickedTab.getAttribute('aria-controls');
  document.getElementById(panelId).hidden = false;
}

// Add click event listeners to each tab button
tabs.forEach((tab) => {
  tab.addEventListener('click', handleTabClick);
});
