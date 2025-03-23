import { applyTheme, loadTemplate } from "./utils.js";

const restoreOptions = async () => {
  const options = await chrome.storage.local.get({
    apiKey: "",
    languageModel: "2.0-flash",
    userModelId: "gemini-2.0-flash-001",
    languageCode: "en",
    userLanguage: "Turkish",
    noTextAction: "summarize",
    textAction: "translate",
    theme: "system"
  });

  document.getElementById("apiKey").value = options.apiKey;
  document.getElementById("languageModel").value = options.languageModel;
  document.getElementById("userModelId").value = options.userModelId;
  document.getElementById("languageCode").value = options.languageCode;
  document.getElementById("userLanguage").value = options.userLanguage;
  document.querySelector(`input[name="noTextAction"][value="${options.noTextAction}"]`).checked = true;
  document.querySelector(`input[name="textAction"][value="${options.textAction}"]`).checked = true;
  document.getElementById("theme").value = options.theme;

  // Dynamically compute modelId instead of storing it
  document.getElementById("modelId").textContent = getModelId(options.languageModel);
};

const saveOptions = async () => {
  const options = {
    apiKey: document.getElementById("apiKey").value,
    languageModel: document.getElementById("languageModel").value,
    userModelId: document.getElementById("userModelId").value,
    languageCode: document.getElementById("languageCode").value,
    userLanguage: document.getElementById("userLanguage").value,
    noTextAction: document.querySelector('input[name="noTextAction"]:checked').value,
    textAction: document.querySelector('input[name="textAction"]:checked').value,
    theme: document.getElementById("theme").value
  };

  await chrome.storage.local.set(options);
  await chrome.storage.session.set({ responseCacheQueue: [] });
  applyTheme((await chrome.storage.local.get({ theme: "system" })).theme);
  const status = document.getElementById("save");
  status.textContent = chrome.i18n.getMessage("options_saved");
  setTimeout(() => (status.textContent = "Save Options"), 2000);
  

};

const initialize = async () => {
  // Apply the theme
  applyTheme((await chrome.storage.local.get({ theme: "system" })).theme);

  // Load the language model template
  const languageModelTemplate = await loadTemplate("languageModelTemplate");
  document.getElementById("languageModelContainer").appendChild(languageModelTemplate);

   // Load the language code template
   const languageCodeTemplate = await loadTemplate("languageCodeTemplate");
   document.getElementById("languageCodeContainer").appendChild(languageCodeTemplate);
 
  // Set the text direction of the body
  document.body.setAttribute("dir", chrome.i18n.getMessage("@@bidi_dir"));

  // Set the text of elements with the data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = chrome.i18n.getMessage(element.getAttribute("data-i18n"));
  });

  restoreOptions();
};

document.addEventListener("DOMContentLoaded", initialize);
document.getElementById("save").addEventListener("click", saveOptions);
