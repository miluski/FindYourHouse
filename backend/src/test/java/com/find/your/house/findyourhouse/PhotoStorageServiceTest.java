package com.find.your.house.findyourhouse;

import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.core.io.Resource;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import com.find.your.house.findyourhouse.utils.services.PhotoStorageService;

import java.nio.charset.StandardCharsets;
import java.nio.file.*;

import static org.junit.jupiter.api.Assertions.*;

class PhotoStorageServiceTest {

    private final Path fileStorageLocation = Paths.get("C:/photos");

    @InjectMocks
    private PhotoStorageService fileStorageService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        fileStorageService = new PhotoStorageService();
    }

    @Test
    void testStoreFile() {
        MultipartFile file = new MockMultipartFile("test.jpg", "test.jpg", "image/jpeg",
                "test image content".getBytes());
        String fileName = fileStorageService.storePhoto(file);
        assertNotNull(fileName);
        assertTrue(Files.exists(Paths.get(fileStorageLocation.toString(), fileName)));
    }

    @Test
    void testStoreFileWithInvalidFileName() {
        MultipartFile file = new MockMultipartFile("..\\test.jpg", "..\\test.jpg", "image/jpeg",
                "test image content".getBytes());
        assertThrows(RuntimeException.class, () -> fileStorageService.storePhoto(file));
    }

    @Test
    void testLoadFileAsResource() {
        MockMultipartFile photo = new MockMultipartFile("file", "test.jpg", "image/jpeg",
                "test image content".getBytes(StandardCharsets.UTF_8));
        String fileName = fileStorageService.storePhoto(photo);
        Resource resource = fileStorageService.loadPhotoAsResource(fileName);
        assertNotNull(resource);
        assertTrue(resource.exists());
    }

    @Test
    void testLoadFileAsResourceNotFound() {
        String fileName = "nonexistent.jpg";
        assertThrows(RuntimeException.class, () -> fileStorageService.loadPhotoAsResource(fileName));
    }
}