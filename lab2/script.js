function showDashboard(event) {
  event.preventDefault();
  document.getElementById('login-containe').style.display = 'none';
  document.getElementById('dashboard-container').style.display = 'flex';
  document.getElementById('login-containe').classList.add('hidden');
  document.getElementById('dashboard-container').classList.remove('hidden');
  document.body.style.background = 'none';
}

function selectExercise(language) {
  document.getElementById('exercise-title').innerText = language;

  // Mã code cho từng ngôn ngữ
  const codeMap = {
      "C Exercise 1": `
      #include <stdio.h>
      int main() {
          int a, b;
          printf("Enter two numbers: ");
          scanf("%d %d", &a, &b);
          printf("Sum is: %d\\n", a + b);
          return 0;
      }
      `,
                      "Python Exercise 1": `
      a = int(input("Enter first number: "))
      b = int(input("Enter second number: "))
      print("Sum is:", a + b)
      `,
                      "Java Exercise 1": `
      import java.util.Scanner;

      public class Main {
          public static void main(String[] args) {
              Scanner scanner = new Scanner(System.in);
              System.out.print("Enter first number: ");
              int a = scanner.nextInt();
              System.out.print("Enter second number: ");
              int b = scanner.nextInt();
              System.out.println("Sum is: " + (a + b));
          }
      }
      `,
                      "C Exercise 2": `
      #include <stdio.h>
      int main() {
          int a, b;
          printf("Enter two numbers: ");
          scanf("%d %d", &a, &b);
          if (b != 0) {
              printf("Division result is: %.2f\\n", (float)a / b);
          } else {
              printf("Cannot divide by zero!\\n");
          }
          return 0;
      }
      `,
                      "Python Exercise 2": `
      a = int(input("Enter first number: "))
      b = int(input("Enter second number: "))
      average = (a + b) / 2
      print("Average is:", average)
      `,
                      "Java Exercise 2": `
      import java.util.Scanner;

      public class Main {
          public static void main(String[] args) {
              Scanner scanner = new Scanner(System.in);
              System.out.print("Enter first number: ");
              int a = scanner.nextInt();
              System.out.print("Enter second number: ");
              int b = scanner.nextInt();
              System.out.println("Product is: " + (a * b));
          }
      }
      `
  };

  document.getElementById('editor').innerText = codeMap[language];
  document.getElementById('test-case-results').style.display = 'none';
}

function runTestCase() {
  const input1 = parseInt(document.getElementById('test-input-1').value);
  const input2 = parseInt(document.getElementById('test-input-2').value);
  const expectedOutput = parseFloat(document.getElementById('expected-output').value);
  if (isNaN(input1) || isNaN(input2) || isNaN(expectedOutput)) {
      alert('Please enter valid numbers.');
      return;
  }

  // Mô phỏng việc chạy mã và hiển thị kết quả
  const actualOutput = input2 !== 0 ? (input1 / input2) : "Cannot divide by zero";

  const resultDetails = `
      <p><strong>Input 1:</strong> ${input1}</p>
      <p><strong>Input 2:</strong> ${input2}</p>
      <p><strong>Expected Output:</strong> ${expectedOutput}</p>
      <p><strong>Actual Output:</strong> ${actualOutput}</p>
      <p><strong>Status:</strong> ${expectedOutput === actualOutput ? 'Passed' : 'Failed'}</p>
      <p><strong>Score:</strong> ${expectedOutput === actualOutput ? 10 : 0} points</p>
  `;

  // Chuyển đến trang kết quả
  document.getElementById('result-container').style.display = 'block';
  document.getElementById('result-details').innerHTML = resultDetails;
  document.getElementById('dashboard-container').style.display = 'none';
}

function submitTestCase() {
  const resultContainer = document.getElementById('result-container');
  resultContainer.style.display = 'block';
  document.getElementById('dashboard-container').style.display = 'none';

  const exerciseTitle = document.getElementById('exercise-title').innerText;
  document.getElementById('result-details').innerHTML = `<p>Exercise "${exerciseTitle}" has been completed and submitted!</p>`;
}

function goBackToDashboard() {
  document.getElementById('result-container').style.display = 'none';
  document.getElementById('dashboard-container').style.display = 'flex';
  document.getElementById('test-case-results').style.display = 'none';
}

function logout() {
  document.getElementById('login-containe').style.display = 'block';
  document.getElementById('dashboard-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'none';

  document.querySelector('input[name="username"]').value = '';
  document.querySelector('input[name="password"]').value = '';

  document.getElementById('exercise-title').innerText = 'Exercise Title';
  document.getElementById('editor').innerText = '';

  document.getElementById('login-containe').classList.remove('hidden'); 
  document.getElementById('dashboard-container').classList.add('hidden'); 
  document.getElementById('result-container').style.display = 'none'; 
  document.body.style.background = '';
}