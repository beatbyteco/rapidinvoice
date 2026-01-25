'use client';

import { formatCurrency, formatDate } from '@/lib/invoice-utils';

export const MinimalTemplate = ({ invoice, theme }) => {
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
        padding: '48px',
        minHeight: '100%',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: '300',
                margin: 0,
                letterSpacing: '-0.5px',
              }}
            >
              {invoice.senderName || 'Your Company'}
            </h2>
            <p
              style={{
                fontSize: '13px',
                color: theme.mutedTextColor,
                margin: '8px 0 0 0',
              }}
            >
              {invoice.senderEmail}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <p
              style={{
                fontSize: '13px',
                color: theme.mutedTextColor,
                margin: 0,
                letterSpacing: '2px',
              }}
            >
              INVOICE
            </p>
            <p
              style={{
                fontSize: '20px',
                fontWeight: '500',
                margin: '4px 0 0 0',
              }}
            >
              {invoice.invoiceNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Addresses & Dates */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '11px',
              color: theme.mutedTextColor,
              margin: '0 0 12px 0',
              letterSpacing: '1px',
            }}
          >
            BILL TO
          </p>
          <p style={{ fontWeight: '500', margin: 0, fontSize: '15px' }}>
            {invoice.clientName || '—'}
          </p>
          <p
            style={{
              fontSize: '13px',
              color: theme.mutedTextColor,
              whiteSpace: 'pre-line',
              margin: '8px 0',
              lineHeight: '1.7',
            }}
          >
            {invoice.clientAddress || '—'}
          </p>
          <p
            style={{
              fontSize: '13px',
              color: theme.mutedTextColor,
              margin: 0,
            }}
          >
            {invoice.clientEmail}
          </p>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ marginBottom: '20px' }}>
            <p
              style={{
                fontSize: '11px',
                color: theme.mutedTextColor,
                margin: '0 0 4px 0',
                letterSpacing: '1px',
              }}
            >
              DATE
            </p>
            <p style={{ fontWeight: '400', margin: 0 }}>
              {formatDate(invoice.createdAt, 'long')}
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: '11px',
                color: theme.mutedTextColor,
                margin: '0 0 4px 0',
                letterSpacing: '1px',
              }}
            >
              DUE
            </p>
            <p style={{ fontWeight: '400', margin: 0 }}>
              {formatDate(invoice.dueDate, 'long')}
            </p>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '48px',
        }}
      >
        <thead>
          <tr style={{ borderBottom: `1px solid ${theme.textColor}` }}>
            <th
              style={{
                textAlign: 'left',
                fontSize: '11px',
                fontWeight: '400',
                letterSpacing: '1px',
                padding: '0 0 12px 0',
                color: theme.mutedTextColor,
              }}
            >
              DESCRIPTION
            </th>
            <th
              style={{
                textAlign: 'center',
                fontSize: '11px',
                fontWeight: '400',
                letterSpacing: '1px',
                padding: '0 0 12px 0',
                color: theme.mutedTextColor,
              }}
            >
              QTY
            </th>
            <th
              style={{
                textAlign: 'right',
                fontSize: '11px',
                fontWeight: '400',
                letterSpacing: '1px',
                padding: '0 0 12px 0',
                color: theme.mutedTextColor,
              }}
            >
              RATE
            </th>
            <th
              style={{
                textAlign: 'right',
                fontSize: '11px',
                fontWeight: '400',
                letterSpacing: '1px',
                padding: '0 0 12px 0',
                color: theme.mutedTextColor,
              }}
            >
              AMOUNT
            </th>
          </tr>
        </thead>

        <tbody>
          {invoice.items.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                style={{
                  padding: '32px 0',
                  textAlign: 'center',
                  color: theme.mutedTextColor,
                }}
              >
                No items added
              </td>
            </tr>
          ) : (
            invoice.items.map((item) => (
              <tr
                key={item.id}
                style={{
                  borderBottom: `1px solid ${theme.borderColor}`,
                }}
              >
                <td style={{ padding: '16px 0' }}>
                  <p style={{ margin: 0 }}>{item.description || '—'}</p>
                  {(item.taxRate > 0 || item.discount > 0) && (
                    <p
                      style={{
                        fontSize: '12px',
                        color: theme.mutedTextColor,
                        margin: '4px 0 0 0',
                      }}
                    >
                      {item.taxRate > 0 && `Tax: ${item.taxRate}%`}
                      {item.taxRate > 0 && item.discount > 0 && ' • '}
                      {item.discount > 0 && `Discount: ${item.discount}%`}
                    </p>
                  )}
                </td>

                <td
                  style={{
                    padding: '16px 0',
                    textAlign: 'center',
                    color: theme.mutedTextColor,
                  }}
                >
                  {item.quantity}
                </td>

                <td
                  style={{
                    padding: '16px 0',
                    textAlign: 'right',
                    color: theme.mutedTextColor,
                  }}
                >
                  {formatCurrency(item.unitPrice, invoice.currency)}
                </td>

                <td style={{ padding: '16px 0', textAlign: 'right' }}>
                  {formatCurrency(item.total, invoice.currency)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Totals */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '48px' }}>
        <div style={{ width: '240px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
            <span style={{ fontSize: '13px', color: theme.mutedTextColor }}>Subtotal</span>
            <span>{formatCurrency(invoice.subtotal, invoice.currency)}</span>
          </div>

          {invoice.discountTotal > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
              <span style={{ fontSize: '13px', color: theme.mutedTextColor }}>Discount</span>
              <span style={{ color: '#059669' }}>
                -{formatCurrency(invoice.discountTotal, invoice.currency)}
              </span>
            </div>
          )}

          {invoice.taxTotal > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
              <span style={{ fontSize: '13px', color: theme.mutedTextColor }}>Tax</span>
              <span>{formatCurrency(invoice.taxTotal, invoice.currency)}</span>
            </div>
          )}

          {invoice.shippingCost > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
              <span style={{ fontSize: '13px', color: theme.mutedTextColor }}>Shipping</span>
              <span>{formatCurrency(invoice.shippingCost, invoice.currency)}</span>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '16px 0 0 0',
              borderTop: `1px solid ${theme.textColor}`,
              marginTop: '8px',
            }}
          >
            <span style={{ fontSize: '13px', letterSpacing: '1px' }}>TOTAL</span>
            <span style={{ fontSize: '20px', fontWeight: '500' }}>
              {formatCurrency(invoice.total, invoice.currency)}
            </span>
          </div>
        </div>
      </div>

      {/* Notes & Terms */}
      {(invoice.notes || invoice.termsAndConditions) && (
        <div
          style={{
            paddingTop: '32px',
            borderTop: `1px solid ${theme.borderColor}`,
          }}
        >
          {invoice.notes && (
            <div style={{ marginBottom: '24px' }}>
              <p
                style={{
                  fontSize: '11px',
                  color: theme.mutedTextColor,
                  margin: '0 0 8px 0',
                  letterSpacing: '1px',
                }}
              >
                NOTES
              </p>
              <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.7' }}>
                {invoice.notes}
              </p>
            </div>
          )}

          {invoice.termsAndConditions && (
            <div>
              <p
                style={{
                  fontSize: '11px',
                  color: theme.mutedTextColor,
                  margin: '0 0 8px 0',
                  letterSpacing: '1px',
                }}
              >
                TERMS
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: theme.mutedTextColor,
                  margin: 0,
                  lineHeight: '1.7',
                }}
              >
                {invoice.termsAndConditions}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
