// utils/fileHandler.js
const validateFile = (fileBase64) => {
    if (!fileBase64) {
        return {
            file_valid: false,
            file_mime_type: null,
            file_size_kb: null
        };
    }

    try {
        // Decode the Base64 file
        const buffer = Buffer.from(fileBase64, 'base64');

        // MIME type detection logic (basic example, customize as needed)
        const mimeType = detectMimeType(buffer);
        const fileSizeKb = (buffer.length / 1024).toFixed(2);

        return {
            file_valid: true,
            file_mime_type: mimeType,
            file_size_kb: fileSizeKb
        };
    } catch (error) {
        console.error('File validation failed:', error);
        return {
            file_valid: false,
            file_mime_type: null,
            file_size_kb: null
        };
    }
};

// Placeholder function for MIME type detection
const detectMimeType = (buffer) => {
    // Add MIME type detection logic here
    return 'application/octet-stream'; // Default MIME type if detection is not implemented
};

module.exports = { validateFile };
