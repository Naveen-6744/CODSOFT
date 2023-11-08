import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;

public class ATMGUI extends JFrame implements ActionListener {
    private JTextField balanceField;
    private JTextField amountField;
    private JButton checkBalanceButton;
    private JButton depositButton;
    private JButton withdrawButton;
    private JButton exitButton;

    private double accountBalance = 1000.00;

    public ATMGUI() {
        setTitle("Bank ATM");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(5, 2));

        JLabel balanceLabel = new JLabel("Account Balance:");
        balanceField = new JTextField();
        balanceField.setEditable(false);

        // Increase the font size for the balance field
        Font font = balanceField.getFont();
        balanceField.setFont(new Font(font.getName(), font.getStyle(), 18));

        JLabel amountLabel = new JLabel("Amount:");
        amountField = new JTextField();

        checkBalanceButton = new JButton("Check Balance");
        depositButton = new JButton("Deposit");
        withdrawButton = new JButton("Withdraw");
        exitButton = new JButton("Exit");

        checkBalanceButton.addActionListener(this);
        depositButton.addActionListener(this);
        withdrawButton.addActionListener(this);
        exitButton.addActionListener(this);

        add(balanceLabel);
        add(balanceField);
        add(amountLabel);
        add(amountField);
        add(checkBalanceButton);
        add(depositButton);
        add(withdrawButton); // Corrected the JButton label here
        add(exitButton);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == checkBalanceButton) {
            DecimalFormat decimalFormat = new DecimalFormat("##,##,###.00");
            balanceField.setText("Rs. " + decimalFormat.format(accountBalance));
        } else if (e.getSource() == depositButton) {
            double amount = Double.parseDouble(amountField.getText());
            accountBalance += amount;
            amountField.setText("");
        } else if (e.getSource() == withdrawButton) {
            double amount = Double.parseDouble(amountField.getText());
            if (amount <= accountBalance) {
                accountBalance -= amount;
                amountField.setText("");
            } else {
                JOptionPane.showMessageDialog(this, "Insufficient funds!");
            }
        } else if (e.getSource() == exitButton) {
            System.exit(0);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            ATMGUI atm = new ATMGUI();
            atm.setVisible(true);
        });
    }
}
