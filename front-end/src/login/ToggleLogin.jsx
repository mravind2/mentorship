export default function ToggleLogin(){
  function handleToggle() {
    const toggle = document.getElementById('toggle');
    const dot = document.querySelector('.dot');
    if (toggle.checked) {
      dot.style.transform = 'translateX(100%)';
    } else {
      dot.style.transform = 'translateX(0%)';
    }
  }
    return(
        <div class="flex items-center justify-center py-4">
          <span class="text-gray-700 font-medium">Mentee</span>
          <label for="toggle" class="flex items-center ml-2 cursor-pointer">
            <div class="relative">
              <input
                id="toggle"
                type="checkbox"
                class="sr-only"
                onClick={handleToggle}
              />
              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
          </label>
          <span class="ml-2 text-gray-700 font-medium">Mentor</span>
        </div>
    )
}