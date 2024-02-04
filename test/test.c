#include <stdio.h>
#include <stdlib.h>

// =========================================================================
// BOOK RELATED CODE START
// =========================================================================

// Book structure
typedef struct Book {
    char title[100];
    char author[100];
    char ISBN[100];
    // 0 = not loaned (available) , 1 = loaned (not available)
    int loaned;
    struct Book *next
} Book;

// Function to create book
Book *createBook(){
    // Memory allocate vivlio
    Book *newBook = (Book *)malloc(sizeof(Book));

    // Checkareis an yparxei
    if(newBook == NULL){
        printf("Memory allocation failed\n");
        return NULL
    }

  // Initialize the book
    printf("Enter title: ");
    scanf("%s", newBook->title);
    printf("Enter author: ");
    scanf("%s", newBook->author);
    printf("Enter ISBN: ");
    scanf("%s", newBook->ISBN);
    newBook->loaned = 0;
    newBook->next = NULL;
  
    return newBook
}

// Function to add book to the list
void addBook(){
    // Create book
    Book *newBook = createBook()

    // If list is empty
    if(head == NULL){
        head = newBook;
    } else {
        newBook->next = head
        head = newBook;
    }
    
    printf("Book Added Successfully")
}

void printAllBooks(){
    if(head==NULL){
        printf("No available books in the catalogue")
        return;
    } 

    Book *current = head;
    printf("\n==== All Books ====\n")
    while(current != NULL){
        printf("Title: %s\n", current->title);
        printf("Author: %s\n", current->author);
        printf("ISBN: %s\n", current->ISBN);
        printf("Loaned: %d\n", current->loaned);
        printf("\n")
        current = current->next;
    }
}

// Declaration of head pointer
Book *head = NULL;

// =========================================================================
// BOOK RELATED CODE END
// =========================================================================

// OTHER CODE START
void displayMenu() {
    printf("\n=== Book Catalogue Menu ===\n");
    printf("1. Load Catalogue from File\n");
    printf("2. Add a New Book\n");
    printf("3. Search for a Book\n");
    printf("4. Loan a Book\n");
    printf("5. Return a Book\n");)
    printf("6. Print All Available Books\n");
    printf("7. Save Catalogue to File\n");
    printf("8. Exit\n");
    printf("Select an option: ");
}
// OTHER CODE END


int main() {
    int choice;

    while(1){
        displayMenu();
        scanf("%d", &choice);

        if(choice == 1) {
            printf("Load Catalogue from File\n");
        }
        else if(choice == 2) {
            addBook();
        }
        else if(choice == 3) {
            printf("Search for a Book\n");
        } 
        else if(choice == 4) {
            printf("Loan a Book\n");
        }
        else if (choice == 5) {
            printf("Return a Book\n");
        }
        else if (choice == 6) {
            printf("Print All Available Books\n");
        }
        else if (choice == 7) {
            printf("Save Catalogue to File\n");
        }
        else if (choice == 8) {
            printf("Exit\n");
            exit(0);
            break;
        }
        else {
            printf("Invalid choice\n");
        }
    }

    return 0
 }
