package io.github.jdiemke.ngforum;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.github.jdiemke.ngforum.model.Post;
import io.github.jdiemke.ngforum.persistence.PostRepository;

/**
 * This is the entry point for our Spring Boot 2 application.
 *
 * @author Johannes Diemke
 */
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner initData(PostRepository postRepository) {
        return args -> {
            List<Post> posts = Arrays.asList(
                new Post("OpenGL", "It's magic!"),
                new Post("Gradle", "It's a hipster tool.")
            );
            postRepository.saveAll(posts);
        };
    }

}
