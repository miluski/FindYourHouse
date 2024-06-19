package com.find.your.house.findyourhouse;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.multipart.MultipartFile;

import com.find.your.house.findyourhouse.controller.PhotosController;
import com.find.your.house.findyourhouse.utils.services.PhotoStorageService;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.io.File;
@WebMvcTest(PhotosController.class)
public class PhotosControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PhotoStorageService fileStorageService;

    @InjectMocks
    private PhotosController photosController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        fileStorageService = Mockito.mock(PhotoStorageService.class);
        photosController = new PhotosController(fileStorageService);
        mockMvc = MockMvcBuilders.standaloneSetup(photosController).build();
    }

    @Test
    public void testDownloadPhotoWithExistingFile() throws Exception {
        String filename = "test.jpg";
        Resource resource = mock(Resource.class);
        File mockFile = mock(File.class);
        when(fileStorageService.loadPhotoAsResource(any())).thenReturn(resource);
        when(resource.getFile()).thenReturn(mockFile);
        when(mockFile.getAbsolutePath()).thenReturn("/path/to/test.jpg");
        mockMvc.perform(MockMvcRequestBuilders.get("/api/photos/download/" + filename))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.IMAGE_JPEG));
    }

    @Test
    public void testUploadPhoto() throws Exception {
        MockMultipartFile photo = new MockMultipartFile("file", "test.jpg", MediaType.IMAGE_JPEG_VALUE,
                "test image content".getBytes());
        when(fileStorageService.storePhoto(any(MultipartFile.class))).thenReturn("test.jpg");
        mockMvc.perform(MockMvcRequestBuilders.multipart("/api/photos/upload")
                .file(photo))
                .andExpect(status().isOk());
    }

    @Test
    public void testUploadPhotoWithException() throws Exception {
        MockMultipartFile photo = new MockMultipartFile("file", "test.jpg", MediaType.IMAGE_JPEG_VALUE,
                "test image content".getBytes());
        when(fileStorageService.storePhoto(any(MultipartFile.class))).thenThrow(new RuntimeException());
        mockMvc.perform(MockMvcRequestBuilders.multipart("/api/photos/upload")
                .file(photo))
                .andExpect(status().isBadRequest());
    }
}